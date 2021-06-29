export function loadCss(url: string, callback?: Function) {
  const head = document.getElementsByTagName('head')[0] || document.documentElement
  const script = document.createElement('link')
  script.rel = 'stylesheet'
  script.onload = function() {
    if (callback) {
      callback()
    }

  }
  script.href = url;
  head.insertBefore(script, head.firstChild);
}