import * as amplitude from '@amplitude/analytics-node'
import { v4 as uuid } from 'uuid'

export const getOS = () => {
  let userAgent = window.navigator.userAgent,
      platform = window.navigator.platform,
      macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
      windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
      iosPlatforms = ['iPhone', 'iPad', 'iPod'],
      os = null;

  if (macosPlatforms.indexOf(platform) !== -1) {
    os = 'Mac OS';
  } else if (iosPlatforms.indexOf(platform) !== -1) {
    os = 'iOS';
  } else if (windowsPlatforms.indexOf(platform) !== -1) {
    os = 'Windows';
  } else if (/Android/.test(userAgent)) {
    os = 'Android';
  } else if (!os && /Linux/.test(platform)) {
    os = 'Linux';
  }
  return os
}

export const getDevice = () => {
  const userAgent = navigator.userAgent.toLowerCase()
  const isMobile = /iPhone|Android/i.test(navigator.userAgent)
  const isTablet = /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(userAgent)
  if (isMobile) {
    return 'Mobile'
  } else if (isTablet){
    return 'Tablet'
  }
  return 'Desktop'
}

export const trackEvent = (eventName, eventProperties = undefined) => {
  let deviceId = localStorage.getItem('device_id')

  if (!deviceId) {
    deviceId = uuid()
    localStorage.setItem('device_id', deviceId)
  }

  const data = {
    ...eventProperties,
    OS: getOS(),
    Device: getDevice(),
  }

  amplitude.track(eventName, data, {device_id: deviceId})
}