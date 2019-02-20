$(function() {
  // Current language
  var language = $('html').attr('lang');

  // Start state
  var currStep = 'START';

  // Default document title
  var pageTitle = 'FinTech';

  // Default page title and subtitle
  var currStepText = '';
  var currStepSubText = '';

  // Progressbar from 0 to 100
  var progress = 25;

  // Dynamic page elements
  var $languageSwitcher = $('[data-elm="languageSwitcher"]');
  var $startCta = $('[data-elm="startCta"]');
  var $iframeWrapper = $('[data-elm="iframe"]');
  var $iframe = $('iframe', $iframeWrapper);
  var $successWrapper = $('[data-elm="success"]');
  var $loginId = $('[data-elm="loginId"]');
  var $intro = $('[data-elm="intro"]');
  var $step = $('[data-elm="step"]');
  var $stepTitle = $('[data-elm="stepTitle"]');
  var $stepSubTitle = $('[data-elm="stepSubTitle"]');
  var $progressBar = $('[data-elm="progressBar"]');
  var $progressBarSteps = $('[data-elm="progressBarSteps"]');
  var $bankNotFound = $('[data-elm="bankNotFound"]');

  function initApp() {
    // Remove iFrame header
    // Need to add an option in FC
    // customizeIframe();

    // Bind to click
    handleClickEvents();

    // Bind to iFrame events
    handleIframeEvents();

    // Bind to language switcher events
    handleLanguageEvents();

    // Init state
    handleState({step: currStep});
  };

  function handleState(state) {
    currStep = state.step;

    // Debugg
    // console.log('Current step: ', state);

    // if (currStep == 'START') {
    //   // Stuff
    // }

    // Hide bank not found message
    if (!$iframeWrapper.hasClass('d-none')) {
      $bankNotFound.addClass('d-none');
    }

    if (currStep == 'COMPONENT_LOAD_INSTITUTION_SELECTOR') {
      // Update step text
      currStepText = i18n[language].institutionSelector;
      currStepSubText = i18n[language].subInstitutionSelector;

      // Hide language switcher since changing the language will refresh the iFrame and loose the flow
      $languageSwitcher.removeClass('d-none');

      // Update the progressbar
      progress = 33;
      $progressBarSteps.find('li').removeClass('active');
      $progressBarSteps.find('li:nth-child(1)').addClass('active');

      // Show bank not found message
      if (!$iframeWrapper.hasClass('d-none')) {
        $bankNotFound.removeClass('d-none');
      }
    }

    if (currStep == 'INSTITUTION_SELECTED') {
      // Show the steps title and progressbar
      $step.removeClass('d-none');

      // Hide the intro texts
      $intro.addClass('d-none');
    }

    if (currStep == 'COMPONENT_LOAD_CREDENTIAL') {
      // Update step text
      currStepText = i18n[language].credential;
      currStepSubText = i18n[language].subCredential;

      // Hide language switcher since changing the language will refresh the iFrame and loose the flow
      $languageSwitcher.addClass('d-none');

      // Update the progressbar
      progress = 50;
      $progressBarSteps.find('li').removeClass('active');
      $progressBarSteps.find('li:nth-child(2)').addClass('active');
    }

    if (currStep == 'SUBMIT_CREDENTIAL') {
      // Update step text
      currStepText = i18n[language].loading;
      currStepSubText = i18n[language].subLoading;

      // Update the progressbar
      progress = 60;
    }

    if (currStep == 'COMPONENT_LOAD_MFA') {
      // Update step text
      currStepText = i18n[language].mfa;
      currStepSubText = i18n[language].subMfa;

      // Update the progressbar
      progress = 70;
    }

    if (currStep == 'SUBMIT_MFA') {
      // Update step text
      currStepText = i18n[language].loading;
      currStepSubText = i18n[language].subLoading;

      // Update the progressbar
      progress = 80;
    }

    if (currStep == 'COMPONENT_LOAD_ACCOUNT_SELECTION') {
      console.log(currStep);

      // Update step text
      currStepText = i18n[language].accountSelector;
      currStepSubText = i18n[language].subAccountSelector;

      // Update the progressbar
      progress = 90;
      $progressBarSteps.find('li').removeClass('active');
      $progressBarSteps.find('li:nth-child(3)').addClass('active');
    }

    if (currStep == 'ACCOUNT_SELECTED') {
      // Update step text
      currStepText = i18n[language].accountSelected;
      currStepSubText = i18n[language].subAccountSelected;
    }

    if (currStep == 'REDIRECT') {
      // Update step text
      currStepText = i18n[language].success;
      currStepSubText = i18n[language].subSuccess;

      // Hide the iFrame
      $iframeWrapper.addClass('d-none');

      // Show the success layout
      $successWrapper.removeClass('d-none');

      // Display the loginId
      // $loginId.text(getParameterByName('loginId', state.url));
      console.log('loginId', getParameterByName('loginId', state.url));

      // Hide the steps title and progressbar
      $step.addClass('d-none');

      // Update the progressbar
      progress = 100;
    }

    // Update the document title so it matches the current iFrame step
    $(document).prop('title', pageTitle + ' - ' + currStepText);

    // Update the page title and subtitle
    $stepTitle.text(currStepText);
    $stepSubTitle.text(currStepSubText);

    // Update the progressbar
    $progressBar.find('.progress-bar').css({ width: progress + '%' });
  }

  function handleClickEvents() {
    $startCta.on('click', function(event) {
      // Prevent default behavior
      event.preventDefault();

      // Hide start button
      $(this).addClass('d-none');

      // Show iFrame
      $iframeWrapper.removeClass('d-none');

      // Show the no bank text
      $bankNotFound.removeClass('d-none');

      // Show the steps title and progressbar
      $step.removeClass('d-none');

      // Hide the intro texts
      $intro.addClass('d-none');
    });
  }

  function handleIframeEvents() {
    // Listen to events comming from flinks's iFrame
    window.addEventListener('message', function(e) {

      // Make sure the event comes from us ex.: https://fintech-iframe.private.fin.ag/
      if (1 /* CHANGE ME BEFORE GOING TO PROD */) { //~event.origin.indexOf('https://fintech-iframe.private.fin.ag/')
        if (e.data.step) {
          // Customize the app based on the iFrame state
          handleState(e.data);
        }
      }
    });
  }

  // Handle language switcher
  function handleLanguageEvents() {
    // Bootstrap dropdown event
    // $languageSwitcher.on('show.bs.dropdown', function(event) {
    // });

    $('[data-i18n="otherLang"]').on('click', function(event) {
      // Set the new language on the html tag
      var newLanguage = $(this).text().toLowerCase();
      $('html').attr('lang', newLanguage);

      // Update the current language
      language = newLanguage;

      // Translate all texts with the targeted language
      translateTexts(newLanguage);

      // Get the current iFrame src
      var newUrl = $iframe.attr('src');

      // Update iFrame src language parameter
      // This forces the iFrame to reload.
      // The iFrame state won't be saved
      $iframe.attr('src', updateQueryStringParameter(newUrl, 'language', newLanguage));
    });
  };

  // Translate all texts
  function translateTexts(newLanguage) {
    // Loop through all translatable texts
    $.each($('[data-i18n]'), function(index, elm) {
      // Get the key
      var key = $(elm).attr('data-i18n');
      // Get the text associated with that key
      var newText = i18n[newLanguage][key];
      // Set the new translated text to the element
      $(elm).text(newText);
    });
  }

  // Helper function
  function updateQueryStringParameter(uri, key, value) {
    var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
    var separator = uri.indexOf('?') !== -1 ? "&" : "?";

    if (uri.match(re)) {
      return uri.replace(re, '$1' + key + "=" + value + '$2');
    } else {
      return uri + separator + key + "=" + value;
    }
  }

  // Helper function
  function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');

    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
    results = regex.exec(url);

    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
  }

  // English and french texts
  var i18n = {
    en: {
      title: "FinTech",
      subtitle: "Service driven commerce",
      subsubtitle: "Real-Time Bank Account Validation",
      text: "FinTech' Real-Time Bank Account Validation solution allows you to securely validate your bank account, in real-time. Click to get started.",
      startCta: "Start",
      lang: "EN",
      otherLang: "FR",
      institutionSelector: "Step 1: Bank selection",
      subInstitutionSelector: "Please select your bank",
      credential: "Step 2: Bank login",
      subCredential: "Please accept the terms and enter your bank account credentials",
      loading: "Loading",
      subLoading: "We are processing your request",
      mfa: "Step 2: Bank security",
      subMfa: "Please answer the security questions",
      accountSelector: "Step 3: Account selection",
      subAccountSelector: "Please select the account you want to validate",
      accountSelected: "The account has been linked successfully",
      subAccountSelected: "Thank you",
      success: "You have successfully validated your bank account",
      subSuccess: "Your FinTech representative will contact you shortly. Thank you for choosing FinTech",
      secure: "Real-Time Bank Account Validation",
      subSecure: "For Merchant Services From FinTech",
      progressStep1: "1. Select your bank",
      progressStep2: "2. Login",
      progressStep3: "3. Select account",
      bankNotFound: "If you don't see your bank listed please contact your FinTech representative"
    },
    fr: {
      title: "FinTech",
      subtitle: "Service axé sur le commerce",
      subsubtitle: "Validation bancaire instantannée",
      text: "La solution de validation de compte bancaire en temps réel de FinTech vous permet de valider votre compte bancaire en toute sécurité, en temps réel. Cliquez pour commencer.",
      startCta: "Débuter",
      lang: "FR",
      otherLang: "EN",
      institutionSelector: "Étape 1 - Selection d'une banque",
      subInstitutionSelector: "Veuillez choisir votre banque",
      credential: "Étape 2 - Authentification",
      subCredential: "Veuillez accépter les termes et saisir votre identifiant de compte bancaire",
      loading: "Chargement",
      subLoading: "Nous traitons votre demande",
      mfa: "Étape 2 - Sécurité",
      subMfa: "S'il vous plaît répondre aux questions de sécurité",
      accountSelector: "Étape 3 - Veuillez choisir un compte",
      subAccountSelector: "Veuillez sélectionner le compte que vous souhaitez valider",
      accountSelected: "Le compte à bien été associé",
      subAccountSelected: "Merci",
      success: "Vous avez validé votre compte bancaire avec succès",
      subSuccess: "Votre représentant FinTech vous contactera sous peu. Merci d'avoir choisi FinTech",
      secure: "Validation de compte bancaire en temps réel",
      subSecure: "Pour les services marchands de FinTech",
      progressStep1: "1. Choisir une banque",
      progressStep2: "2. Authentification",
      progressStep3: "3. Choisir un compte",
      bankNotFound: "Si votre banque ne figure pas dans la liste, veuillez contacter votre représentant FinTech."
    }
  };

  // Start the app
  initApp();
});
