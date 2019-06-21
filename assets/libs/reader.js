$(function () {

    var max = 50;
    var charArray = [];
    var $contents = $('.topics-sentence');
    var contentsLength = $contents.length;


    for (i = 0; i < contentsLength; i++) {
        var showText = $contents.eq(i).text();
        var charArray = showText.split('');
        var arrayLength = charArray.length;

        if (arrayLength < max) {
            $contents.eq(i).html(text);
        }

        var insertText = showText.substring(0, max - 1);
        var text = insertText += '…';
        $contents.eq(i).html(text);
    }
});
