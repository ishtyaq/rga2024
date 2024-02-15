'use strict'
//import { webLoaded, inputControls } from './vendor/webcontrols'

 const BODY = document.body
 const HTML = document.querySelector('html')

 const webLoaded = (callback) => {
  const loaderTemp = document.querySelector('.data-loader')
  window.addEventListener('DOMContentLoaded', (event) => {
    //Burger menu
    burggerMenu()

    //body scroll event
    srollDirection()

    //viewport checker
    viewPortChecker()

    // theme
    theme()

    // theme
    fontSize()

    //Signature
    console.log(
      '%c Developed by PGS (http://pgsuae.com/)',
      'background: #45d98e; color: #fff;'
    )

    setTimeout(() => {
      BODY.classList.add('dom-loaded')
      bodyProperty()
    }, 350)

    if (loaderTemp) {
      setTimeout(() => {
        loaderTemp.remove()
      }, 1300)
    }

    return callback()
  })
}

 const theme = () => {
  let btn = document.querySelector('.data-theme')

  if (btn) {
    let currentTheme = Cookies.get('theme')

    if (typeof currentTheme != 'undefined' && currentTheme == 'gray') {
      document.body.classList.add('bodyGray')
    }

    btn.addEventListener('click', (e) => {
      e.preventDefault()
      let body = document.body

      body.classList.toggle('bodyGray')

      body.classList.contains('bodyGray')
        ? Cookies.set('theme', 'gray')
        : Cookies.set('theme', 'color')
    })
  }
}

let fonetDefault = 25,
  fontMax = 21,
  FontMin = 29

 const fontSize = () => {
  let fontUp = document.querySelector('.data-font-up')

  if (fontUp) {
    let currentSize = Cookies.get('fontSize')
    if (typeof currentSize != 'undefined') {
      document.documentElement.style.setProperty('--gfs', currentSize)
    }

    fontUp.addEventListener('click', (e) => {
      e.preventDefault()
      currentSize = Cookies.get('fontSize')
      let tempSize = 0

      if (typeof currentSize === 'undefined') {
        tempSize = fonetDefault - 1
      } else {
        tempSize = parseInt(currentSize) - 1
      }

      if (fontMax <= tempSize) {
        document.documentElement.style.setProperty('--gfs', tempSize)
        Cookies.set('fontSize', tempSize)
      }
    })
  }

  let fontDown = document.querySelector('.data-font-down')

  if (fontDown) {
    let currentSize = Cookies.get('fontSize')
    if (typeof currentSize != 'undefined') {
      document.documentElement.style.setProperty('--gfs', currentSize)
    }

    fontDown.addEventListener('click', (e) => {
      e.preventDefault()
      currentSize = Cookies.get('fontSize')
      let tempSize = 0

      if (typeof currentSize === 'undefined') {
        tempSize = fonetDefault + 1
      } else {
        tempSize = parseInt(currentSize) + 1
      }

      if (FontMin >= tempSize) {
        document.documentElement.style.setProperty('--gfs', tempSize)
        Cookies.set('fontSize', tempSize)
      }
    })
  }

  //reset font size
  let fontReset = document.querySelector('.data-font-reset')

  if (fontReset) {
    fontReset.addEventListener('click', (e) => {
      e.preventDefault()
      document.documentElement.style.setProperty('--gfs', fonetDefault)
      Cookies.set('fontSize', fonetDefault)
    })
  }
}
 const viewPortChecker = () => {
  inView('[data-inView]')
    .on('enter', (el) => {
      el.classList.add('inView')
    })
    .on('exit', (el) => {
      //  el.classList.remove('inView')
    })
}
 const burggerMenu = () => {
  let burgerButto = document.querySelector('.data-burger-menu')
  if (burgerButto) {
    burgerButto.addEventListener('click', () => {
      // let target_ = burgerButto.dataset.burgerMenu

      if (BODY.classList.contains('menuActive')) {
        BODY.classList.remove('menuActive')
        burgerButto.classList.remove('active')
      } else {
        BODY.classList.add('menuActive')
        burgerButto.classList.add('active')
      }
    })
  }
}

 const srollDirection = () => {
  let tempScrollPos = 0
  document.addEventListener('scroll', () => {
    let currentScrollY = window.scrollY

    currentScrollY > 10
      ? BODY.classList.add('scrolled')
      : BODY.classList.remove('scrolled')
    currentScrollY < tempScrollPos
      ? BODY.classList.add('scrolling_top')
      : BODY.classList.remove('scrolling_top')

    tempScrollPos = currentScrollY
  })
}

 const inputControls = () => {
  var fields = document.querySelectorAll(
    'input:-webkit-autofill,input:not([type]),input[type=text]:not(.browser-default),input[type=password]:not(.browser-default),input[type=email]:not(.browser-default),input[type=url]:not(.browser-default),input[type=time]:not(.browser-default), input[type=date]:not(.browser-default), input[type=datetime]:not(.browser-default), input[type=datetime-local]:not(.browser-default), input[type=tel]:not(.browser-default), input[type=number]:not(.browser-default), input[type=search]:not(.browser-default), textarea'
  )

  if (!fields) return

  fields.forEach(function (el) {
    if (el.value.length) {
      el.parentElement.classList.add('active')
    }

    el.addEventListener('focus', function () {
      el.parentElement.classList.add('active')
    })

    el.addEventListener('blur', function () {
      if (el.value.length) {
        el.parentElement.classList.add('active')
      } else {
        el.parentElement.classList.remove('active')
      }
    })
  })
}

 const bodyVariables = () => {
  // body varibales
  let fel = document.querySelector('footer'),
    footerH = fel ? fel.clientHeight : 0,
    hel = document.querySelector('header'),
    headerH = hel ? hel.clientHeight : 0

  let r = document.querySelector('body')
  r.style.setProperty('--footerH', footerH + 'px')
  r.style.setProperty('--headerH', headerH + 'px')
}

 const bodyProperty = () => {
  bodyVariables()
  addEventListener('resize', (event) => {
    bodyVariables()
  })
}

 const deviceList = () => {
  const responsiveWidth = window.innerWidth
  if (responsiveWidth < 767) {
    return 'sm'
  } else if (responsiveWidth > 767 && responsiveWidth < 1200) {
    return 'md'
  } else {
    return 'lg'
  }
}


window.onunload = () => {
  window.scrollTo(0, 0)
}

webLoaded(function () {
  inputControls()
})
