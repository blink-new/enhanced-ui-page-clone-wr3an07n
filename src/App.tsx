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
        return <Check className="w-3.5 h-3.5" />
      case 'error':
        return <X className="w-3.5 h-3.5" />
      case 'warning':
        return <AlertTriangle className="w-3.5 h-3.5" />
      default:
        return <X className="w-3.5 h-3.5" />
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
        return 'bg-emerald-50 border-emerald-100'
      case 'error':
        return 'bg-red-50 border-red-100'
      case 'warning':
        return 'bg-amber-50 border-amber-100'
      default:
        return 'bg-gray-50 border-gray-100'
    }
  }

  const getItemIcon = (IconComponent: any, status: string) => {
    const iconColor = status === 'complete' ? 'text-gray-600' : 'text-gray-400'
    return <IconComponent className={`w-4 h-4 ${iconColor}`} />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-2xl mx-auto px-6 py-20">
        {/* Main Container with Enhanced Shadow */}
        <div className="bg-white border border-gray-200/60 rounded-2xl shadow-xl shadow-gray-900/5 backdrop-blur-sm">
          {/* Header with Refined Spacing */}
          <div className="flex items-center justify-between px-8 py-7 border-b border-gray-100/80">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900 tracking-tight">
                Campaign Summary
              </h1>
              <p className="text-sm text-gray-500 mt-1">
                Review your campaign setup progress
              </p>
            </div>
            <Button 
              variant="default"
              className="bg-gray-900 hover:bg-gray-800 text-white font-medium px-6 py-2.5 rounded-lg transition-all duration-200 border border-gray-900 shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98]"
            >
              Send Test
            </Button>
          </div>

          {/* Status Items with Enhanced Design */}
          <div className="px-8 py-6">
            <div className="space-y-3">
              {statusItems.map((item, index) => (
                <div 
                  key={index} 
                  className="group flex items-start py-5 px-5 hover:bg-gray-50/80 rounded-xl transition-all duration-200 border border-transparent hover:border-gray-200/60 hover:shadow-sm"
                >
                  {/* Item Icon */}
                  <div className="flex-shrink-0 mr-4 mt-0.5">
                    <div className="w-8 h-8 rounded-lg bg-gray-100 border border-gray-200/60 flex items-center justify-center group-hover:bg-gray-50 transition-colors duration-200">
                      {getItemIcon(item.icon, item.status)}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0 mr-4">
                    <h3 className="text-sm font-medium text-gray-900 mb-1.5 leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Status Indicator */}
                  <div className="flex-shrink-0">
                    <div className={`
                      w-7 h-7 rounded-full flex items-center justify-center border transition-all duration-200
                      ${getStatusBg(item.status)} ${getStatusColor(item.status)}
                      group-hover:scale-105
                    `}>
                      {getStatusIcon(item.status)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer with Subtle Enhancement */}
          <div className="px-8 py-6 border-t border-gray-100/80 bg-gradient-to-r from-gray-50/50 to-gray-50/80 rounded-b-2xl">
            <div className="flex items-center justify-center space-x-2">
              <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
              <p className="text-sm text-gray-500 font-medium">
                Complete all steps to launch your campaign
              </p>
              <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App