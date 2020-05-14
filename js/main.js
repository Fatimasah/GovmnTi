$(document).ready(function () {
    //view all btn in information service
    $('.service-modal #view-all').click(function () {
        $('#hidden-muni').slideToggle(400);
        $(this).text(function (i, v) {
            return v === 'view less' ? ' view all' : 'view less'
        })
    });

    //view otp code in request form
    $('#request-form .otp-code').click(function () {
        $('#request-form .otp-code').hide();
        $('#request-form .hidden-confirm').slideDown(400);
    });

    // view all/ less in my govmnti
    $(".hidden-services").hide();
    $(".serv-links").on("click", function () {
        var txt = $(this).prev(".hidden-services").is(':visible') ? 'view all' : 'view Less';
        $(this).text(txt);
        $(this).prev('.hidden-services').slideToggle(400);
    });

    // view all/ less in mini data
    $(".hidden-items").hide();
    $(".view-all").on("click", function () {
        var txt = $(this).prev(".hidden-items").is(':visible') ? 'view all' : 'view Less';
        $(this).text(txt);
        $(this).prev('.hidden-items').slideToggle(400);
    });

    // Hide the sign-origin Modal 
    $(".next-btn").click(function () {
        console.log(
            $("#o-city").val() + ', ' + $("#o-country").val() + ',' +
            $("#r-city").val() + ', ' + $("#r-country").val());
        $("#sign-origin").modal("hide");
    });

    // enable next btn in sign origin form
    $('#o-city, #o-country, #r-city, #r-country').change(function () {
        var str = "";
        if (($("#o-city option:selected").val() == '') ||
            ($("#o-country option:selected").val() == '') ||
            ($("#r-city option:selected").val() == '') ||
            ($("#r-country option:selected").val() == '')) {

            $('.next-btn').prop('disabled', true);
        }
        else {
            $('.next-btn').prop('disabled', false);
        }
    });

    // hide cor-form
    $("#cor-form #send-otp").click(function () {
        console.log(
            $("#cor-form #trade-num").val() + ', ' + $("#cor-form #tax-num").val() + ',' +
            $("#cor-form #sales-tax").val() + ', ');

        $("#cor-form").modal("hide");
    });

    // enable send otp in cor form
    $('#cor-form #trade-num, #cor-form #tax-num, #cor-form #sales-tax, #cor-form #cor-type, #cor-form #name, #cor-form #national-num, #cor-form #position, #cor-form #contact-num, #cor-form #formal-email').change(function () {
        var str = "";
        if ((!$("#cor-form #trade-num").val()) ||
            ((!$("#cor-form #tax-num").val()) && (!$("#cor-form #sales-tax").val())) ||
            ($("#cor-form #cor-type option:selected").val() == '') ||
            (!$("#cor-form #name").val()) ||
            (!$("#cor-form #national-num").val()) ||
            (!$("#cor-form #position").val()) ||
            (!$("#cor-form #contact-num").val()) ||
            (!$('#cor-form #formal-email').val())
        ) {
            $('#cor-form #send-otp').prop('disabled', true);
        }
        else {
            $('#cor-form #send-otp').prop('disabled', false);
        }
    });

    // hide ind-form
    $("#ind-form #send-otp").click(function () {
        $("#ind-form").modal("hide");
    });

    //  enable send otp in ind form
    $('#ind-form #national-num, #ind-form #id-num, #ind-form #pass-num, #ind-form #birth, #ind-form #gender, #ind-form #email, #ind-form #contact-num').change(function () {
        var str = "";
        if ((!$("#ind-form #national-num").val()) ||
            ((!$("#ind-form #id-num").val()) && (!$("#ind-form #pass-num").val())) ||
            ($("#ind-form #gender option:selected").val() == '') ||
            (!$("#ind-form #birth").val()) ||
            (!$("#ind-form #email").val()) ||
            (!$("#ind-form #contact-num").val())
        ) {
            $('#ind-form #send-otp').prop('disabled', true);
        }
        else {
            $('#ind-form #send-otp').prop('disabled', false);
        }
    });

    //  enable send otp button on the request form
    $("#request-form .otp-code").click(function () {
        console.log(
            $("#req-type").val() + ', ' + $("#country").val() + ',' +
            $("#gov-name").val());
    });

    // enable otp code btn in requset form
    $('#request-form #req-type, #request-form #country, #request-form #gov-name').change(function () {
        var str = "";
        if (($("#request-form #req-type option:selected").val() == '') ||
            ($("#request-form #country option:selected").val() == '') ||
            ($("#request-form #gov-name option:selected").val() == '')
        ) {

            $('#request-form .otp-code').prop('disabled', true);
        }
        else {
            $('#request-form .otp-code').prop('disabled', false);
        }
    });

    //  hide addver-select modal  
    $("#addver-select .not-regester").click(function () {
        $("#addver-select").modal("hide");
    });
    // addver regester modal (enable confirm btn)
    $('#addver-regester #first-name, #addver-regester #mobile-num, #addver-regester #tel-num, #addver-regester #fax-num, #addver-regester #email ').change(function () {
        var str = "";
        if ((!$("#addver-regester #first-name").val()) ||
            (!$("#addver-regester #mobile-num").val()) ||
            (!$("#addver-regester #tel-num").val()) ||
            (!$("#addver-regester #fax-num").val()) ||
            (!$("#addver-regester #email").val())
        ) {

            $('#addver-regester .addver-confirm').prop('disabled', true);
        }
        else {
            $('#addver-regester .addver-confirm').prop('disabled', false);
        }
    });

    //  hide addver-regester modal  
    $("#addver-regester .addver-confirm").click(function () {
        $("#addver-regester").modal("hide");
    });

    //seeting 
    // img upload
    $("#user-img").click(function (e) {
        $("#img-upload").click();
    });

    function fasterPreview(uploader) {
        if (uploader.files && uploader.files[0]) {
            $('#user-img').attr('src',
                window.URL.createObjectURL(uploader.files[0]));
        }
    }

    $("#img-upload").change(function () {
        fasterPreview(this);
    });

});


// search and select country modal
function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

// otp code design
function getCodeBoxElement(index) {
    return document.getElementById('codeBox' + index);
}
function onKeyUpEvent(index, event) {
    const eventCode = event.which || event.keyCode;
    if (getCodeBoxElement(index).value.length === 1) {
        if (index !== 4) {
            getCodeBoxElement(index + 1).focus();
        } else {
            getCodeBoxElement(index).blur();
            // Submit code
            console.log('submit code ');
        }
    }
    if (eventCode === 8 && index !== 1) {
        getCodeBoxElement(index - 1).focus();
    }
}
function onFocusEvent(index) {
    for (item = 1; item < index; item++) {
        const currentElement = getCodeBoxElement(item);
        if (!currentElement.value) {
            currentElement.focus();
            break;
        }
    }
}