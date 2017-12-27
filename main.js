define([
    'require',
    'jquery',
    'base/js/namespace',
    './popup'
], function(
    requirejs,
    $,
    Jupyter,
    popup
) {
    'use strict'

    var load_extension = function() {

        //add css
        var link = document.createElement('link')
        link.type = 'text/css'
        link.rel = 'stylesheet'
        link.href = requirejs.toUrl('./share-popup.css')
        document.getElementsByTagName('head')[0].appendChild(link)

        // add the popup to the page
        $('body').append(popup)

        // bind hide-popup function to the close button
        $('#close-popup').click(function() {
          $('#share-notebook-popup').hide()
        })

        // dd the share-notebook button to the toolbar
        $(Jupyter.toolbar.add_buttons_group([
            Jupyter.keyboard_manager.actions.register({
                help   : 'Opens share-notebook popup',
                icon   : 'fa-share-alt',
                handler: function() {
                    $('#share-notebook-popup').toggle()
                    setTimeout(function() { $('#btn-share-notebook').blur() }, 500)
                }
            }, 'open-share-notebook-popup', 'share_notebook')
        ])).find('.btn').attr('id', 'btn-share-notebook')
    }

    return {
        load_ipython_extension : load_extension
    }
})
