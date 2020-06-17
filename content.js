$(function() {
    $('.flex-justify-end').append("<input type='button' class='btn btn-primary ml-1' value='LGTM' id='lgtm-button'>");
    const imgurl = "https://user-images.githubusercontent.com/18584961/83374460-a6989d00-a406-11ea-9292-564de1b51152.jpg";
    $(document).on("click", "#lgtm-button", function(){
        let text = String($("#new_comment_field").val());
        if (text) text += '\n';
        const lgtmText = "![LGTM]("+imgurl+")";
        $('#new_comment_field').val(text+lgtmText);
        $('.flex-justify-end div:nth-child(2) button').prop('disabled', false);
    });
});