// Creates the permalink popup

define([], function() {
    var url = document.location.href
    var permalink = url.replace(/\/user\/.+?\//, '/user-redirect/')

    var permalink_text = document.createElement('div')
    permalink_text.setAttribute('id', 'permalink-text')
    permalink_text.append(permalink)

    var close_icon = document.createElement('i')
    close_icon.setAttribute('class', 'fa fa-times')

    var close_button = document.createElement('button')
    close_button.setAttribute('id', 'close-popup')
    close_button.append(close_icon)

    var copy_icon = document.createElement('i')
    copy_icon.setAttribute('class', 'fa fa-clipboard')

    var copy_button = document.createElement('button')
    copy_button.setAttribute('id', 'copy-btn')
    copy_button.setAttribute('class', 'btn btn-default')
    copy_button.setAttribute('data-clipboard-target', '#permalink-text')
    copy_button.append(copy_icon)

    var permalink_area = document.createElement('div')
    permalink_area.setAttribute('id', 'permalink-area')
    permalink_area.append(permalink_text)
    permalink_area.append(copy_button)

    var popup = document.createElement('div')
    popup.setAttribute('id', 'share-notebook-popup')
    popup.append(close_button)
    popup.append(permalink_area)

    return popup
})
