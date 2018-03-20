function EventDispatcher () {}

Object.assign(EventDispatcher.prototype, {

  addEventListener: function (type, listener) {
    if (this._listeners === undefined) this._listeners = {}

    var listeners = this._listeners

    if (listeners[ type ] === undefined) {
      listeners[ type ] = []
    }

    if (listeners[ type ].indexOf(listener) === -1) {
      listeners[ type ].push(listener)
    }
  },

  hasEventListener: function (type, listener) {
    if (this._listeners === undefined) return false

    var listeners = this._listeners

    return listeners[ type ] !== undefined && listeners[ type ].indexOf(listener) !== -1
  },

  removeEventListener: function (type, listener) {
    if (this._listeners === undefined) return

    var listeners = this._listeners
    var listenerArray = listeners[ type ]

    if (listenerArray !== undefined) {
      var index = listenerArray.indexOf(listener)

      if (index !== -1) {
        listenerArray.splice(index, 1)
      }
    }
  },

  dispatchEvent: function (event) {
    if (this._listeners === undefined) return

    var listeners = this._listeners
    var listenerArray = listeners[ event.type ]

    if (listenerArray !== undefined) {
      event.target = this

      var array = listenerArray.slice(0)

      for (var i = 0, l = array.length; i < l; i++) {
        array[ i ].call(this, event)
      }
    }
  }

})

function Asset (name, type, asset) {
  this.name = name
  this.type = type
  this.asset = asset
}

Asset.prototype = Object.assign(Object.create(EventDispatcher.prototype), {
  constructor: Asset
})

var assetsMap = {

}

export default {
  registryAsset (name, type, asset) {
    if (assetsMap[name]) {
      assetsMap[name].asset = asset
      assetsMap[name].dispatchEvent({ type: 'change', asset })
    } else {
      assetsMap[name] = new Asset(name, type, asset)
    }
  },
  getAsset (name) {
    return assetsMap[name] || null
  },
  deleteAsset (name) {
    delete assetsMap[name]
  }
}
