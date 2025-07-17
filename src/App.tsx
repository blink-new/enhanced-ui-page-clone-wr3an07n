import { Button } from './components/ui/button'
import { 
  Check, 
  X, 
  AlertTriangle, 
  Users, 
  MessageSquare, 
  Globe,
  Zap
} from 'lucide-react'

function App() {
  const statusItems = [
    {
      title: 'Contacts List',
      status: 'complete',
      description: '0 Contact loaded',
      icon: Users
    },
    {
      title: 'Channels Selection',
      status: 'error',
      description: 'No channels selected',
      icon: Zap
    },
    {
      title: 'Messages & Contents',
      status: 'error',
      description: 'You have not defined a message for each channel selected',
      icon: MessageSquare
    },
    {
      title: 'Web Experience',
      status: 'warning',
      description: 'You have not selected any web page template.',
      icon: Globe
    }
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'complete':
        return <Check className="w-4 h-4" />
      case 'error':
        return <X className="w-4 h-4" />
      case 'warning':
        return <AlertTriangle className="w-4 h-4" />
      default:
        return <X className="w-4 h-4" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'complete':
        return 'text-emerald-600'
      case 'error':
        return 'text-red-500'
      case 'warning':
        return 'text-amber-500'
      default:
        return 'text-gray-400'
    }
  }

  const getStatusBg = (status: string) => {
    switch (status) {
      case 'complete':
        return 'bg-emerald-50'
      case 'error':
        return 'bg-red-50'
      case 'warning':
        return 'bg-amber-50'
      default:
        return 'bg-gray-50'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-8 py-16">
        {/* Main Container with Border */}
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm">
          {/* Header */}
          <div className="flex items-center justify-between p-8 border-b border-gray-100">
            <h1 className="text-2xl font-medium text-gray-900">
              Campaign Summary
            </h1>
            <Button 
              variant="default"
              className="bg-gray-900 hover:bg-gray-800 text-white font-normal px-6 py-2 rounded-md transition-colors border border-gray-900"
            >
              Send Test
            </Button>
          </div>

          {/* Status Items */}
          <div className="p-8">
            <div className="space-y-1">
              {statusItems.map((item, index) => (
                <div 
                  key={index} 
                  className="group flex items-center py-4 px-4 hover:bg-gray-50 rounded-lg transition-colors border border-transparent hover:border-gray-200"
                >
                  {/* Status Icon */}
                  <div className={`
                    w-6 h-6 rounded-full flex items-center justify-center mr-4 border
                    ${getStatusBg(item.status)} ${getStatusColor(item.status)}
                    ${item.status === 'complete' ? 'border-emerald-200' : 
                      item.status === 'error' ? 'border-red-200' : 'border-amber-200'}
                  `}>
                    {getStatusIcon(item.status)}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-medium text-gray-900 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="px-8 py-6 border-t border-gray-100 bg-gray-50 rounded-b-xl">
            <p className="text-sm text-gray-400 text-center">
              Complete all steps to launch your campaign
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App