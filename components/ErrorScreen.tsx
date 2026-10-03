'use client'

import * as React from 'react'
import Link from 'next/link'
import {
  AlertTriangle,
  Compass,
  Home,
  RotateCcw,
  ShieldAlert,
  WifiOff,
  ServerCrash,
  Clock,
  Hammer,
  HelpCircle,
  ArrowRight,
  Sparkles,
  MapPin,
} from 'lucide-react'
import { InfinityLogo } from './InfinityLogo'
import { useLanguage } from '@/context/LanguageContext'

export type ErrorType = '404' | '500' | '501' | '502' | '503' | '504' | 'server-error'

interface ErrorScreenProps {
  code: ErrorType
  customTitle?: string
  customMessage?: string
  reset?: () => void
}

interface ErrorConfig {
  code: string
  badge: string
  badgeKo: string
  badgeKm: string
  badgeZh: string
  title: string
  titleKo: string
  titleKm: string
  titleZh: string
  message: string
  messageKo: string
  messageKm: string
  messageZh: string
  icon: React.ElementType
  actionType: 'home' | 'retry' | 'contact'
}

const errorConfigs: Record<ErrorType, ErrorConfig> = {
  '404': {
    code: '404',
    badge: 'Out of Bounds • Mat Off-Limits',
    badgeKo: '경로 이탈 • 경기장 외 구역',
    badgeKm: 'ក្រៅទីលាន • មិនមានទំព័រនេះទេ',
    badgeZh: '界外区域 • 页面未找到',
    title: 'Page Not Found',
    titleKo: '페이지를 찾을 수 없습니다',
    titleKm: 'រកមិនឃើញទំព័រដែលអ្នកស្នើសុំ',
    titleZh: '未找到指定页面',
    message:
      'The technique or page you are looking for has been moved, renamed, or does not exist on the Infinity Taekwondo platform.',
    messageKo: '찾으시는 품새 또는 페이지가 이동되었거나 삭제되어 도장 매트 위에 존재하지 않습니다.',
    messageKm: 'ទំព័រដែលអ្នកកំពុងស្វែងរកត្រូវបានផ្លាស់ប្តូរ ឬមិនមាននៅលើប្រព័ន្ធ Infinity Taekwondo ឡើយ។',
    messageZh: '您请求的技术文档或页面已迁移、更名，或不存在于 Infinity Taekwondo 官方平台中。',
    icon: Compass,
    actionType: 'home',
  },
  '500': {
    code: '500',
    badge: 'Internal System Stance Fault',
    badgeKo: '내부 시스템 오류 • 서버 결함',
    badgeKm: 'កំហុសប្រព័ន្ធខាងក្នុង (500)',
    badgeZh: '内部系统错误 • 服务器异常',
    title: 'Internal Server Error',
    titleKo: '서버 내부 오류가 발생했습니다',
    titleKm: 'មានបញ្ហាកំហុសបច្ចេកទេសក្នុងម៉ាស៊ីនមេ',
    titleZh: '内部服务器发生错误',
    message:
      'Our sports science telemetry servers encountered an unexpected exception while processing this request. Our engineering team has been notified.',
    messageKo: '스포츠 과학 텔레메트리 서버에서 예기치 않은 오류가 발생했습니다. 시스템 엔지니어가 복구 중입니다.',
    messageKm: 'ម៉ាស៊ីនមេរបស់យើងបានជួបប្រទះបញ្ហាមិនរំពឹងទុកពេលកំពុងដំណើរការ។ ក្រុមការងារបច្ចេកទេសកំពុងដោះស្រាយ។',
    messageZh: '运动科学数据服务在处理此项请求时发生未捕获异常。工程团队已收到实时警报并正在修复。',
    icon: ServerCrash,
    actionType: 'retry',
  },
  '501': {
    code: '501',
    badge: 'Poomsae Under Construction',
    badgeKo: '기술 준비 중 • 미구현 기능',
    badgeKm: 'មុខងារកំពុងរៀបចំអភិវឌ្ឍន៍ (501)',
    badgeZh: '未实现的功能 • 正在开发中',
    title: 'Not Implemented',
    titleKo: '아직 구현되지 않은 기능입니다',
    titleKm: 'មុខងារនេះមិនទាន់ត្រូវបានដាក់ឱ្យដំណើរការនៅឡើយទេ',
    titleZh: '功能尚未实现',
    message:
      'This feature or curriculum module is currently undergoing martial choreography in our laboratory and has not yet been deployed.',
    messageKo: '이 기능은 현재 인피니티 연구소에서 개발 및 안무 테스트 중이며 곧 공개될 예정입니다.',
    messageKm: 'មុខងារ ឬវគ្គបណ្តុះបណ្តាលនេះកំពុងស្ថិតក្នុងការអភិវឌ្ឍនៅឡើយ។ នឹងដាក់ឱ្យដំណើរការឆាប់ៗនេះ។',
    messageZh: '该训练模块或系统功能目前正在研发实验中心进行最终测试，尚未正式上线。',
    icon: Hammer,
    actionType: 'home',
  },
  '502': {
    code: '502',
    badge: 'Gateway Relay Disrupted',
    badgeKo: '게이트웨이 통신 이상 • 중계 오류',
    badgeKm: 'ការតភ្ជាប់ច្រកទ្វារមានបញ្ហា (502)',
    badgeZh: '网关错误 • 上游通信异常',
    title: 'Bad Gateway',
    titleKo: '잘못된 게이트웨이 응답',
    titleKm: 'ច្រកតភ្ជាប់ Gateway មិនអាចបញ្ជូនទិន្នន័យបាន',
    titleZh: '错误的网关响应',
    message:
      'The upstream edge server received an invalid response while transmitting martial telemetry and video streaming data.',
    messageKo: '비디오 스트리밍 및 선수 데이터 전송 중 상위 게이트웨이 서버로부터 유효하지 않은 응답을 받았습니다.',
    messageKm: 'ម៉ាស៊ីនមេគែមខាងលើបានទទួលការឆ្លើយតបមិនត្រឹមត្រូវ ពេលកំពុងបញ្ជូនទិន្នន័យវីដេអូ ឬក្បាច់គុន។',
    messageZh: '上游网关在传输流媒体影像与选手动作捕捉数据时收到无效响应。',
    icon: ShieldAlert,
    actionType: 'retry',
  },
  '503': {
    code: '503',
    badge: 'Dojang Routine Maintenance',
    badgeKo: '도장 정기 점검 중 • 서비스 일시 중단',
    badgeKm: 'ការថែទាំប្រព័ន្ធសាលាគុន (503)',
    badgeZh: '道馆例行维护 • 服务暂时不可用',
    title: 'Service Unavailable',
    titleKo: '서비스 점검 중입니다',
    titleKm: 'សេវាកម្មកំពុងត្រូវបានកែលម្អជាបណ្តោះអាសន្ន',
    titleZh: '系统例行维护中',
    message:
      'Our training platform is temporarily offline for scheduled mat resurfacing and system optimization. We will be back on the mats shortly.',
    messageKo: '시스템 업그레이드 및 정기 도장 점검을 위해 잠시 서비스가 중단되었습니다. 곧 정상화됩니다.',
    messageKm: 'ប្រព័ន្ធបណ្តុះបណ្តាលរបស់យើងកំពុងត្រូវបានថែទាំ និងបង្កើនល្បឿនជាបណ្តោះអាសន្ន។ នឹងដំណើរការឡើងវិញឆាប់ៗ។',
    messageZh: '平台目前正在进行例行性能升级与系统维护，即将恢复正常访问。感谢您的耐心等待。',
    icon: AlertTriangle,
    actionType: 'retry',
  },
  '504': {
    code: '504',
    badge: 'Referee Signal Timeout',
    badgeKo: '게이트웨이 시간 초과 • 응답 지연',
    badgeKm: 'ផុតកំណត់ម៉ោងឆ្លើយតប (504 Timeout)',
    badgeZh: '网关超时 • 响应超时',
    title: 'Gateway Timeout',
    titleKo: '게이트웨이 응답 시간이 초과되었습니다',
    titleKm: 'ពេលវេលាតភ្ជាប់បានផុតកំណត់',
    titleZh: '网关连接超时',
    message:
      'The server did not receive a timely response from the upstream scoring sensor network. Please verify your connection and refresh.',
    messageKo: '경기 판정 센서 네트워크로부터 응답 시간이 초과되었습니다. 인터넷 연결을 확인 후 다시 시도해 주세요.',
    messageKm: 'ម៉ាស៊ីនមេមិនបានទទួលការឆ្លើយតបទាន់ពេលវេលាពីបណ្តាញទិន្នន័យទេ។ សូមពិនិត្យមើលអ៊ីនធឺណិតរបស់អ្នក។',
    messageZh: '服务器在等待上游计算节点响应时发生超时。请检查您的网络连接并重试。',
    icon: Clock,
    actionType: 'retry',
  },
  'server-error': {
    code: 'OFFLINE',
    badge: 'Dojang Server Unreachable',
    badgeKo: '서버 연결 끊김 • 네트워크 오프라인',
    badgeKm: 'មិនអាចតភ្ជាប់ទៅកាន់ម៉ាស៊ីនមេ',
    badgeZh: '无法连接至服务器 • 网络离线',
    title: 'Server Not Found',
    titleKo: '도장 서버에 연결할 수 없습니다',
    titleKm: 'មិនអាចស្វែងរក ឬតភ្ជាប់ទៅកាន់ Server បានទេ',
    titleZh: '服务器未响应',
    message:
      'Unable to establish a secure websocket handshake with Infinity Taekwondo master host. Please check your network or try again.',
    messageKo: '인피니티 태권도 메인 호스트 서버와 통신할 수 없습니다. 네트워크 연결 상태를 확인해 주세요.',
    messageKm: 'មិនអាចបង្កើតការតភ្ជាប់ទៅកាន់ម៉ាស៊ីនមេមេរបស់ Infinity Taekwondo បានទេ។ សូមព្យាយាមម្តងទៀត។',
    messageZh: '无法与 Infinity Taekwondo 主机建立网络握手连接。请检查您的网络或稍后重试。',
    icon: WifiOff,
    actionType: 'retry',
  },
}

export function ErrorScreen({ code, customTitle, customMessage, reset }: ErrorScreenProps) {
  const { language } = useLanguage()
  const config = errorConfigs[code] || errorConfigs['404']
  const Icon = config.icon

  // Select language specific copy
  const displayBadge =
    language === 'ko'
      ? config.badgeKo
      : language === 'km'
      ? config.badgeKm
      : language === 'zh'
      ? config.badgeZh
      : config.badge

  const displayTitle = customTitle || (
    language === 'ko'
      ? config.titleKo
      : language === 'km'
      ? config.titleKm
      : language === 'zh'
      ? config.titleZh
      : config.title
  )

  const displayMessage = customMessage || (
    language === 'ko'
      ? config.messageKo
      : language === 'km'
      ? config.messageKm
      : language === 'zh'
      ? config.messageZh
      : config.message
  )

  return (
    <div className="min-h-[85vh] flex items-center justify-center bg-white dark:bg-black text-zinc-900 dark:text-white px-4 py-20 relative overflow-hidden font-sans selection:bg-brand-red selection:text-white transition-colors duration-500">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-red/10 blur-[160px] rounded-full pointer-events-none" />

      {/* Giant Watermark Error Code */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[26vw] font-black text-black/[0.03] dark:text-white/[0.03] select-none pointer-events-none uppercase tracking-tighter whitespace-nowrap z-0">
        {config.code}
      </div>

      <div className="container mx-auto max-w-2xl text-center relative z-10">
        {/* Animated Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-red/30 bg-brand-red/10 text-brand-red text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-md shadow-brand-glow">
          <Icon className="w-4 h-4" /> {displayBadge}
        </div>

        {/* Large Code & Title */}
        <div className="mb-6">
          <span className="text-6xl sm:text-8xl md:text-9xl font-black tracking-tighter text-brand-red block leading-none drop-shadow-sm">
            {config.code}
          </span>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-zinc-900 dark:text-white mt-3">
            {displayTitle}
          </h1>
        </div>

        {/* Descriptive Message */}
        <p className="text-sm sm:text-base md:text-lg text-zinc-600 dark:text-zinc-300 font-light leading-relaxed mb-10 max-w-xl mx-auto px-2">
          {displayMessage}
        </p>

        {/* Primary Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 max-w-md mx-auto mb-12">
          {reset ? (
            <button
              onClick={() => reset()}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-brand-red text-white font-bold uppercase tracking-widest text-xs hover:bg-zinc-900 transition-all shadow-brand-glow flex items-center justify-center gap-2"
            >
              <RotateCcw className="w-4 h-4" /> Try Again
            </button>
          ) : (
            <Link
              href="/"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-brand-red text-white font-bold uppercase tracking-widest text-xs hover:bg-zinc-900 dark:hover:bg-white dark:hover:text-black transition-all shadow-brand-glow flex items-center justify-center gap-2"
            >
              <Home className="w-4 h-4" /> Return to Homepage
            </Link>
          )}

          <Link
            href="/academy"
            className="w-full sm:w-auto px-8 py-4 rounded-full border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-white font-bold uppercase tracking-widest text-xs hover:border-brand-red hover:text-brand-red transition-all flex items-center justify-center gap-2"
          >
            Explore Academy <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Quick Route Directory Helper */}
        <div className="pt-8 border-t border-zinc-200 dark:border-zinc-800">
          <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 block mb-4">
            Quick Dojang Navigation
          </span>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs">
            <Link href="/about" className="px-3.5 py-2 rounded-lg bg-zinc-100 dark:bg-zinc-900 hover:text-brand-red transition-colors min-h-[40px] inline-flex items-center">
              Philosophy &amp; Team
            </Link>
            <Link href="/academy" className="px-3.5 py-2 rounded-lg bg-zinc-100 dark:bg-zinc-900 hover:text-brand-red transition-colors min-h-[40px] inline-flex items-center">
              Curriculum &amp; Belts
            </Link>
            <Link href="/community" className="px-3.5 py-2 rounded-lg bg-zinc-100 dark:bg-zinc-900 hover:text-brand-red transition-colors min-h-[40px] inline-flex items-center">
              Coaches &amp; Students
            </Link>
            <Link href="/achievements" className="px-3.5 py-2 rounded-lg bg-zinc-100 dark:bg-zinc-900 hover:text-brand-red transition-colors min-h-[40px] inline-flex items-center">
              Trophy Wall
            </Link>
            <Link href="/locations" className="px-3.5 py-2 rounded-lg bg-zinc-100 dark:bg-zinc-900 hover:text-brand-red transition-colors min-h-[40px] inline-flex items-center">
              Branch Map
            </Link>
            <Link href="/pricing" className="px-3.5 py-2 rounded-lg bg-zinc-100 dark:bg-zinc-900 hover:text-brand-red transition-colors min-h-[40px] inline-flex items-center">
              Memberships
            </Link>
            <Link href="/contact" className="px-3.5 py-2 rounded-lg bg-zinc-100 dark:bg-zinc-900 hover:text-brand-red transition-colors min-h-[40px] inline-flex items-center">
              Contact Dojang
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
