import React from 'react';
import { Upload, Files, HardDrive, TrendingUp, Calendar, Clock } from 'lucide-react';

interface DashboardProps {
  files: Array<{
    id: string;
    name: string;
    size: number;
    type: string;
    uploadDate: Date;
  }>;
}

const Dashboard: React.FC<DashboardProps> = ({ files }) => {
  const totalSize = files.reduce((acc, file) => acc + file.size, 0);
  const formatBytes = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const recentFiles = files.slice(-5).reverse();

  const stats = [
    {
      title: 'Total de Arquivos',
      value: files.length.toString(),
      icon: Files,
      color: 'bg-blue-500',
      change: '+12%'
    },
    {
      title: 'Espaço Usado',
      value: formatBytes(totalSize),
      icon: HardDrive,
      color: 'bg-green-500',
      change: '+8%'
    },
    {
      title: 'Uploads Hoje',
      value: files.filter(f => 
        f.uploadDate.toDateString() === new Date().toDateString()
      ).length.toString(),
      icon: Upload,
      color: 'bg-purple-500',
      change: '+25%'
    },
    {
      title: 'Taxa de Crescimento',
      value: '15.3%',
      icon: TrendingUp,
      color: 'bg-orange-500',
      change: '+3%'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-1">Visão geral do sistema de arquivos</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                <p className="text-sm text-green-600 mt-1">
                  <span className="font-medium">{stat.change}</span> vs mês anterior
                </p>
              </div>
              <div className={`${stat.color} p-3 rounded-lg`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Files */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-900">Arquivos Recentes</h2>
            <Calendar className="w-5 h-5 text-gray-400" />
          </div>
          <div className="space-y-3">
            {recentFiles.length > 0 ? (
              recentFiles.map((file) => (
                <div key={file.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Files className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 truncate max-w-[200px]">
                        {file.name}
                      </p>
                      <p className="text-sm text-gray-500">{formatBytes(file.size)}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-1" />
                      {file.uploadDate.toLocaleDateString()}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-8 text-gray-500">
                <Files className="w-12 h-12 mx-auto mb-3 opacity-50" />
                <p>Nenhum arquivo enviado ainda</p>
              </div>
            )}
          </div>
        </div>

        {/* Storage Usage */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-900">Uso de Armazenamento</h2>
            <HardDrive className="w-5 h-5 text-gray-400" />
          </div>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-600">Usado</span>
                <span className="font-medium">{formatBytes(totalSize)} / 10 GB</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${Math.min((totalSize / (10 * 1024 * 1024 * 1024)) * 100, 100)}%` }}
                ></div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="text-center p-3 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">
                  {files.filter(f => f.type.startsWith('image/')).length}
                </div>
                <div className="text-sm text-gray-600">Imagens</div>
              </div>
              <div className="text-center p-3 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600">
                  {files.filter(f => f.type.includes('pdf')).length}
                </div>
                <div className="text-sm text-gray-600">PDFs</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;