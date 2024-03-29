(function () {
  const win = window;
  const doc = document.documentElement;

  doc.classList.remove('no-js');
  doc.classList.add('js');

  var SO = 'dd';
  SO = getOS();

  console.log("************+");
  console.log("VALUE" +SO);
  console.log("*************");

  // Reveal animations
  if (document.body.classList.contains('has-animations')) {
    /* global ScrollReveal */
    const sr = window.sr = ScrollReveal();

    // var SO = 'dd';
    // SO = getOS();
    // console.log("************+");
    // console.log("VALUE" +SO);
    // console.log("*************");

    sr.reveal('.feature, .pricing-table-inner', {
      duration: 600,
      distance: '20px',
      easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
      origin: 'bottom',
      interval: 100
    });

    doc.classList.add('anime-ready');
    /* global anime */
    anime.timeline({
      targets: '.hero-figure-box-05'
    }).add({
      duration: 400,
      easing: 'easeInOutExpo',
      scaleX: [0.05, 0.05],
      scaleY: [0, 1],
      perspective: '500px',
      delay: anime.random(0, 400)
    }).add({
      duration: 400,
      easing: 'easeInOutExpo',
      scaleX: 1
    }).add({
      duration: 800,
      rotateY: '-15deg',
      rotateX: '8deg',
      rotateZ: '-1deg'
    });

    anime.timeline({
      targets: '.hero-figure-box-06, .hero-figure-box-07'
    }).add({
      duration: 400,
      easing: 'easeInOutExpo',
      scaleX: [0.05, 0.05],
      scaleY: [0, 1],
      perspective: '500px',
      delay: anime.random(0, 400)
    }).add({
      duration: 400,
      easing: 'easeInOutExpo',
      scaleX: 1
    }).add({
      duration: 800,
      rotateZ: '20deg'
    });

    anime({
      targets: '.hero-figure-box-01, .hero-figure-box-02, .hero-figure-box-03, .hero-figure-box-04, .hero-figure-box-08, .hero-figure-box-09, .hero-figure-box-10',
      duration: anime.random(600, 800),
      delay: anime.random(600, 800),
      rotate: [ anime.random(-360, 360), function (el) { return el.getAttribute('data-rotation'); } ],
      scale: [0.7, 1],
      opacity: [0, 1],
      easing: 'easeInOutExpo'
    });
  }

  runPage(SO);
}());

function getOS() {
  var userAgent = window.navigator.userAgent,
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

  return os;
}

function runPage(osFunc){
  console.log('********runPage*********');
  console.log(osFunc);
  let a = " ";
  a = osFunc;
  console.log('************************');

  if(a.startsWith('Mac')){
    //alert(getOS());
    setTimeout(function(){
      location.href = "https://google.com";
    },500);
  }

  if(a.startsWith('Android')){
    setTimeout(function(){
      //alert(getOS());
      location.href = "https://play.google.com/store/apps/details?id=com.osellus.android.pineapp";
    },500);
  }

  if(a.startsWith('Lin')){
    setTimeout(function(){
      //alert(getOS());
      location.href = "https://play.google.com/store/apps/details?id=com.osellus.android.pineapp";
    },500);
  }
  
  if(a.startsWith('iOS')){
    setTimeout(function(){
      //alert(getOS());
      location.href = "https://apps.apple.com/us/app/pineapp/id393333579";
    },500);
  }
}

// function runTimeStore(){
//   setTimeout(function(){
//     location.href = "https://play.google.com/store/apps/details?id=com.osellus.android.pineapp&hl=es";
//   },3000);
// }
