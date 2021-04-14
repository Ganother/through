export default class SceneManager {
  private static _instance: SceneManager
  private _sceneList: Scene.list = {}
  private _mainSceneEvent: Scene.event = {}
  public static get instance(): SceneManager {
    if (!this._instance) {
      this._instance = new SceneManager()
    }
    return this._instance
  }
  constructor() { }
  public bindMainScene(funcs: Scene.event): void {
    this._mainSceneEvent = funcs
  }
  public register(config: Scene.config): void {
    this._sceneList[config.name] = {
      name: config.name,
      keepAlive: config.keepAlive,
      show: false,
      init: false
    }
  }
  public loadScene(name: string, data?:any): SceneManager {
    if (!this._sceneList[name]) {
      console.warn('没有注册此场景，请检查')
      return this;
    }
    this._sceneList[name].init = true
    this._sceneList[name].show = true
    if (this._mainSceneEvent.onLoadOne && typeof this._mainSceneEvent.onLoadOne === 'function') {
      this._mainSceneEvent.onLoadOne(this._sceneList[name], data)
    }
    return this
  }
}