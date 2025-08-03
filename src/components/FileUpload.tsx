import React, { useState, useRef } from 'react';
import { Upload, X, CheckCircle, AlertCircle, File, Image } from 'lucide-react';

interface FileUploadProps {
  onFileUpload: (file: File) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ onFileUpload }) => {
  const [dragOver, setDragOver] = useState(false);
  const [uploadProgress, setUploadProgress] = useState<Record<string, number>>({});
  const [uploadStatus, setUploadStatus] = useState<Record<string, 'uploading' | 'success' | 'error'>>({});
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const files = Array.from(e.dataTransfer.files);
    processFiles(files);
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    processFiles(files);
  };

  const processFiles = (files: File[]) => {
    files.forEach(file => {
      const fileId = Math.random().toString(36).substr(2, 9);
      
      // Set initial status
      setUploadStatus(prev => ({ ...prev, [fileId]: 'uploading' }));
      setUploadProgress(prev => ({ ...prev, [fileId]: 0 }));

      // Simulate upload progress
      let progress = 0;
      const interval = setInterval(() => {
        progress += Math.random() * 30;
        if (progress >= 100) {
          progress = 100;
          clearInterval(interval);
          setUploadStatus(prev => ({ ...prev, [fileId]: 'success' }));
          onFileUpload(file);
          
          // Clear progress after delay
          setTimeout(() => {
            setUploadProgress(prev => {
              const newState = { ...prev };
              delete newState[fileId];
              return newState;
            });
            setUploadStatus(prev => {
              const newState = { ...prev };
              delete newState[fileId];
              return newState;
            });
          }, 2000);
        } else {
          setUploadProgress(prev => ({ ...prev, [fileId]: progress }));
        }
      }, 200);
    });
  };

  const formatBytes = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const getFileIcon = (type: string) => {
    if (type.startsWith('image/')) return Image;
    return File;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Upload de Arquivos</h1>
        <p className="text-gray-600 mt-1">Envie seus arquivos de forma rápida e segura</p>
      </div>

      {/* Upload Area */}
      <div
        className={`border-2 border-dashed rounded-xl p-12 text-center transition-all duration-200 ${
          dragOver
            ? 'border-blue-400 bg-blue-50'
            : 'border-gray-300 hover:border-gray-400 hover:bg-gray-50'
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <div className="space-y-4">
          <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
            <Upload className="w-8 h-8 text-blue-600" />
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Arraste arquivos aqui
            </h3>
            <p className="text-gray-600 mb-4">
              ou clique para selecionar arquivos do seu computador
            </p>
            
            <button
              onClick={() => fileInputRef.current?.click()}
              className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg transition-colors inline-flex items-center space-x-2"
            >
              <Upload className="w-5 h-5" />
              <span>Selecionar Arquivos</span>
            </button>
          </div>

          <div className="text-sm text-gray-500">
            <p>Suporte para: PDF, DOC, DOCX, XLS, XLSX, JPG, PNG, GIF (máx. 50MB)</p>
          </div>
        </div>

        <input
          ref={fileInputRef}
          type="file"
          multiple
          onChange={handleFileSelect}
          className="hidden"
          accept=".pdf,.doc,.docx,.xls,.xlsx,.jpg,.jpeg,.png,.gif"
        />
      </div>

      {/* Upload Progress */}
      {Object.keys(uploadProgress).length > 0 && (
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Progresso do Upload</h3>
          <div className="space-y-4">
            {Object.entries(uploadProgress).map(([fileId, progress]) => {
              const status = uploadStatus[fileId];
              const StatusIcon = status === 'success' ? CheckCircle : status === 'error' ? AlertCircle : Upload;
              
              return (
                <div key={fileId} className="flex items-center space-x-4">
                  <div className={`p-2 rounded-lg ${
                    status === 'success' ? 'bg-green-100' : 
                    status === 'error' ? 'bg-red-100' : 'bg-blue-100'
                  }`}>
                    <StatusIcon className={`w-5 h-5 ${
                      status === 'success' ? 'text-green-600' : 
                      status === 'error' ? 'text-red-600' : 'text-blue-600'
                    }`} />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium text-gray-900">
                        Arquivo {fileId}
                      </span>
                      <span className="text-sm text-gray-600">
                        {Math.round(progress)}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full transition-all duration-300 ${
                          status === 'success' ? 'bg-green-500' : 
                          status === 'error' ? 'bg-red-500' : 'bg-blue-500'
                        }`}
                        style={{ width: `${progress}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Upload Guidelines */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Diretrizes de Upload</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-gray-900 mb-2">Formatos Aceitos</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Documentos: PDF, DOC, DOCX</li>
              <li>• Planilhas: XLS, XLSX</li>
              <li>• Imagens: JPG, PNG, GIF</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-gray-900 mb-2">Limites</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Tamanho máximo: 50MB por arquivo</li>
              <li>• Múltiplos arquivos: Até 10 por vez</li>
              <li>• Armazenamento total: 10GB</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FileUpload;