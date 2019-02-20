# Flinks Connect Integration Demo

This project is a simple example of Flinks Connect integration using a few features as example.

For this integration a sandbox instance of Flinks Connect is used, which you only be able to successfully authenticate accounts our dummy institution Flinks Capital.

All available accounts for this institution you can find [here](https://sandbox.flinks.io/Readme/#flinks-capital-dummy-institution).

## Installation

Use the package manager [pip](https://pip.pypa.io/en/stable/) to install foobar.

```html
<iframe class="iframe-offset"
   src="https://toolbox-iframe.private.fin.ag/?
   theme=light&accountSelectorEnable=true&customerName=FinTech&redirectUrl=
   https://flinks.io/contact/thank-you&consentEnable=true&innerRedirect=true&
   backgroundColor=f7f7f7&foregroundColor1=000&desktopLayout=true&headerEnable=false&
   institutionFilterEnable=true&demo=true" height="760" scrolling="no">
</iframe>
```

## Event Listener
To activate the event listener into your page, you need to add the following script into your page:

```html
<script>
   window.addEventListener('message', function(e) {
   console.log(e.data)
   });
</script>
```

## Get Support!
All technical questions you have can be found in [Flinks Help Portal](https://help.flinks.io)

## License
[MIT](https://choosealicense.com/licenses/mit/)
