$(document).ready(function () {
    //view all btn in information service
    // 30/05/2020
    $('#city-info #view-all').click(function () {
        $('#city-info #hidden-muni').slideToggle(400);
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
    // 30/05/2020
    $(".country-services .hidden-services").hide();
    $(".country-services .serv-links").on("click", function () {
        var txt = $(this).prev(".country-services .hidden-services").is(':visible') ? 'view all' : 'view Less';
        $(this).text(txt);
        $(this).prev('.country-services .hidden-services').slideToggle(400);
    });

    // view all/ less in mini data
    // 30/05/2020
    //edited 01/06/2020
    $('.mini-data-blocks .view-all').click(function () {
        var button = this
        $('.mini-data-blocks .hidden-items').slideToggle('slow', function () {
            if ($('.mini-data-blocks .hidden-items').is(':visible')) {

                $(button).html(' View Less <i class="arrows_ fas fa-angle-double-up"></i>');
            } else {
                $(button).html(' View All <i class="arrows_ fas fa-angle-double-down"></i>');
            }
        });
    });


    // view all privacy policy
    // 30/05/2020
    $("#privacy-policy .see-more").on('click', function () {
        $("#privacy-policy .hidden-txt").collapse('show');
        $(this).hide();
    });

     // view all eFile-support
    // 09/06/2020
    $("#eFile-support .see-more").on('click', function () {
        $("#eFile-support .hidden-txt").collapse('show');
        $(this).hide();
    });

     // Hide the eFile-support Modal  
    // 09/06/2020
     $(".eSupport-btn").click(function () {
        $("#eFile-support").modal("hide");
    });

    // view all groups and my groups page in all groups page && see more category in add service page 30/05/2020
    $('.profile-form .see-more').click(function () {
        var button = this
        $('.profile-form .hidden-row').slideToggle('slow', function () {
            if ($('.profile-form .hidden-row').is(':visible')) {

                $(button).html(' View Less <i class="arrows_ fas fa-angle-double-up"></i>');
            } else {
                $(button).html(' View All <i class="arrows_ fas fa-angle-double-down"></i>');
            }
        });
    });

    // view all servicse in add service page 30/05/2020
    $(".services .view-all").click(function () {
        var button = this
        $('.services .hidden-services').slideToggle('slow', function () {
            if ($('.services .hidden-services').is(':visible')) {

                $(button).html(' View Less <i class="arrows_ fas fa-angle-double-up"></i>');
            } else {
                $(button).html(' View All <i class="arrows_ fas fa-angle-double-down"></i>');
            }
        });

    });

    // view category in add service page
    $(".show-category-list").on('click', function () {
        $(".category-list").slideDown(400);
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

    // Hide the add country Modal in my govmnti page 
    $(".add-country").click(function () {
        $("#add-country").modal("hide");
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

    //30/05/2020
    //  hide services information city modal in country page  
    $("#city-info .serv-links").click(function () {
        $("#city-info").modal("hide");
    });
    // new site register modal (enable confirm btn)
    $('#new-site #first-name, #new-site #mobile-num, #new-site #tel-num, #new-site #fax-num, #new-site #email ').change(function () {
        var str = "";
        if ((!$("#new-site #first-name").val()) ||
            (!$("#new-site #mobile-num").val()) ||
            (!$("#new-site #tel-num").val()) ||
            (!$("#new-site #fax-num").val()) ||
            (!$("#new-site #email").val())
        ) {

            $('#new-site .newSite-confirm').prop('disabled', true);
        }
        else {
            $('#new-site .newSite-confirm').prop('disabled', false);
        }
    });

    //  hide new site register city modal  
    $("#new-site .newSite-confirm").click(function () {
        $("#new-site").modal("hide");
    });
    //30/05/2020

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