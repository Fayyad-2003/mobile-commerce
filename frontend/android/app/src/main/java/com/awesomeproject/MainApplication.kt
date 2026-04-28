package com.awesomeproject

import android.app.Application
import com.facebook.react.PackageList
import com.horcrux.svg.SvgPackage
import com.facebook.react.ReactApplication
import com.facebook.react.ReactHost
import com.facebook.react.ReactNativeApplicationEntryPoint.loadReactNative
import com.facebook.react.defaults.DefaultReactHost.getDefaultReactHost

class MainApplication : Application(), ReactApplication {

  override val reactHost: ReactHost by lazy {
    getDefaultReactHost(
      context = applicationContext,
      packageList =
        PackageList(this).packages.apply {
            // Packages that cannot be autolinked yet can be added manually here, for example:
            // add(MyReactNativePackage())
            // Ensure react-native-svg is registered if autolinking missed it
            add(SvgPackage())
          },
    )
  }

  override fun onCreate() {
    super.onCreate()
    loadReactNative(this)
  }
}
