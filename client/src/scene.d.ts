declare namespace Scene {
  export interface config {
    name: string
    show?: boolean
    keepAlive: boolean
    init?: boolean
  }

  export interface event {
    onLoadOne?: any
    onPreloadOne?: any
    onRecOne?: any
  }


  export interface list {
    [key: string]: Scene.config
  }
}

