import React, { useState } from 'react';
import { Files, Download, Trash2, Eye, Search, Filter, Grid, List, Calendar, FileText, Image as ImageIcon } from 'lucide-react';

interface FileManagerProps {
  files: Array<{
    id: string;
    name: string;
    size: number;
    type: string;
    uploadDate: Date;
    url?: string;
  }>;
  onDeleteFile: (id: string) => void;
}

const FileManager: React.FC<FileManagerProps> = ({ files, onDeleteFile }) => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [sortBy, setSortBy] = useState<'name' | 'date' | 'size'>('date');

  const formatBytes = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const getFileIcon = (type: string) => {
    if (type.startsWith('image/')) return ImageIcon;
    return FileText;
  };

  const filteredFiles = files
    .filter(file => {
      const matchesSearch = file.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesFilter = filterType === 'all' || 
        (filterType === 'images' && file.type.startsWith('image/')) ||
        (filterType === 'documents' && (file.type.includes('pdf') || file.type.includes('doc')));
      return matchesSearch && matchesFilter;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'name': return a.name.localeCompare(b.name);
        case 'size': return b.size - a.size;
        case 'date': return b.uploadDate.getTime() - a.uploadDate.getTime();
        default: return 0;
      }
    });

  const handleDownload = (file: any) => {
    if (file.url) {
      const link = document.createElement('a');
      link.href = file.url;
      link.download = file.name;
      link.click();
    }
  };

  const handlePreview = (file: any) => {
    if (file.url && file.type.startsWith('image/')) {
      window.open(file.url, '_blank');
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Gerenciar Arquivos</h1>
        <p className="text-gray-600 mt-1">Visualize, organize e gerencie seus arquivos</p>
      </div>

      {/* Controls */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar arquivos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Filters and View */}
          <div className="flex items-center space-x-4">
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="all">Todos os tipos</option>
              <option value="images">Imagens</option>
              <option value="documents">Documentos</option>
            </select>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'name' | 'date' | 'size')}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="date">Data</option>
              <option value="name">Nome</option>
              <option value="size">Tamanho</option>
            </select>

            <div className="flex border border-gray-300 rounded-lg">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 ${viewMode === 'grid' ? 'bg-blue-500 text-white' : 'text-gray-600 hover:bg-gray-50'} rounded-l-lg transition-colors`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 ${viewMode === 'list' ? 'bg-blue-500 text-white' : 'text-gray-600 hover:bg-gray-50'} rounded-r-lg transition-colors`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Files Display */}
      <div className="bg-white rounded-xl shadow-md p-6">
        {filteredFiles.length === 0 ? (
          <div className="text-center py-12">
            <Files className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">Nenhum arquivo encontrado</h3>
            <p className="text-gray-600">
              {searchTerm || filterType !== 'all' 
                ? 'Tente ajustar os filtros de busca'
                : 'Comece enviando alguns arquivos'
              }
            </p>
          </div>
        ) : (
          <>
            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredFiles.map((file) => {
                  const FileIcon = getFileIcon(file.type);
                  return (
                    <div key={file.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex flex-col items-center text-center">
                        {file.type.startsWith('image/') && file.url ? (
                          <img
                            src={file.url}
                            alt={file.name}
                            className="w-16 h-16 object-cover rounded-lg mb-3"
                          />
                        ) : (
                          <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                            <FileIcon className="w-8 h-8 text-blue-600" />
                          </div>
                        )}
                        
                        <h4 className="font-medium text-gray-900 text-sm mb-1 truncate w-full">
                          {file.name}
                        </h4>
                        <p className="text-xs text-gray-500 mb-2">{formatBytes(file.size)}</p>
                        <p className="text-xs text-gray-400 mb-3">
                          {file.uploadDate.toLocaleDateString()}
                        </p>

                        <div className="flex space-x-2">
                          {file.type.startsWith('image/') && (
                            <button
                              onClick={() => handlePreview(file)}
                              className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                              title="Visualizar"
                            >
                              <Eye className="w-4 h-4" />
                            </button>
                          )}
                          <button
                            onClick={() => handleDownload(file)}
                            className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                            title="Download"
                          >
                            <Download className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => onDeleteFile(file.id)}
                            className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                            title="Excluir"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="space-y-2">
                {filteredFiles.map((file) => {
                  const FileIcon = getFileIcon(file.type);
                  return (
                    <div key={file.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="flex items-center space-x-4">
                        {file.type.startsWith('image/') && file.url ? (
                          <img
                            src={file.url}
                            alt={file.name}
                            className="w-10 h-10 object-cover rounded-lg"
                          />
                        ) : (
                          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                            <FileIcon className="w-5 h-5 text-blue-600" />
                          </div>
                        )}
                        
                        <div>
                          <h4 className="font-medium text-gray-900">{file.name}</h4>
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <span>{formatBytes(file.size)}</span>
                            <span className="flex items-center">
                              <Calendar className="w-4 h-4 mr-1" />
                              {file.uploadDate.toLocaleDateString()}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="flex space-x-2">
                        {file.type.startsWith('image/') && (
                          <button
                            onClick={() => handlePreview(file)}
                            className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                            title="Visualizar"
                          >
                            <Eye className="w-4 h-4" />
                          </button>
                        )}
                        <button
                          onClick={() => handleDownload(file)}
                          className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                          title="Download"
                        >
                          <Download className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => onDeleteFile(file.id)}
                          className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                          title="Excluir"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default FileManager;