// Utils
function getBusy(name) {
    busy_element = $(".busy[for='" + name +"']");
    if (!(busy_element.length > 0)) {
        $("input[name='" + name +"']").after("<label for='" + name +"' class='busy'></label>");
        busy_element = $(".busy[for='" + name +"']");
    }
    return busy_element;
}

function showBusy(name) {
    getBusy(name).show();
}

function hideBusy(name) {
    getBusy(name).remove();
}

function showDefaultAjaxError(name, validator) {
    errors = new Array()
    errors[name] = "Error, please try again.";
    
    hideBusy(name);
    validator.showErrors(errors);
}

// Login
$(function() {
    $("#login_submit").live("click", function () {
        $("#frmLogin").validate({
            onfocusout: false,
            onkeyup: false,
            onclick: false,
            submitHandler: function() {
                $("#account_links").load("/account-links");
                tb_remove();
            },
            rules: {
                username: {
                    required: true,
                    remote: {
                        url: "/modals/login/",
                        type: "post",
                        data: {
                            password: function() {
                                return $("#id_password").val();
                            }
                        }
                    }
                }
            }
        });
	});
});

// Register
function validateRegistration() {
    var validator = $("#frmRegister").validate({
        onkeyup: false,
        onclick: false,
        submitHandler: function(form) {
            $("#register_buttons").hide();
            $("#register_progress").show();
            $('#frmRegister').ajaxSubmit(function() { 
                $("#account_links").load("/account-links");
                tb_remove();
            }); 
        },
        rules: {
            username: {
                required: true,
                minlength: 4,
                remote: {
                    url: "/validate/username/",
                    type: "post",
                    timeout: 20000,
                    error: function (XMLHttpRequest, textStatus, errorThrown) { showDefaultAjaxError("username", validator); },
                    beforeSend: function (XMLHttpRequest) { showBusy("username"); },
                    onSuccess: function () { hideBusy("username"); }
                }
            },
            recaptcha_response_field: {
                required: true,
                remote: {
                    url: "/validate/captcha/",
                    type: "post",
                    timeout: 20000,
                    data: {
                        recaptcha_challenge_field: function() {
                            return $("#recaptcha_challenge_field").val();
                        }
                    },
                    error: function (XMLHttpRequest, textStatus, errorThrown) { showDefaultAjaxError("recaptcha_response_field", validator); },
                    beforeSend: function (XMLHttpRequest) { showBusy("recaptcha_response_field"); },
                    onSuccess: function () { hideBusy("recaptcha_response_field"); },
                    invalid: function () { Recaptcha.reload(); }
                }
            }
        }
    });
}

// All forms
function bindForm() {
	$(".shift").click(function () {
	    $(this).css({'background-position' : '0px -27px'});
	});
	$(".shift input").blur(function () {
	    $(".shift").css({'background-position' : '0px 0px'});
	});
    $(".shift input").keydown(function () {
        error_label = $("label[class='error'][for='" + $(this).attr("id") + "']");
        if (error_label.length > 0)
            error_label.remove();
	});
}
