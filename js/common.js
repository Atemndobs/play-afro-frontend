// Register Popup
$('.register-btn').click(function () {
    $('.back-drop').fadeIn();
    $('.register-popup').fadeIn();
    $('html').css('overflow', 'hidden');
})

$('.modal-close').click(function () {
    $('.back-drop').fadeOut();
    $('.register-popup').fadeOut();
    $('html').css('overflow', 'auto');
})


// -----------------



// Datatable

$(document).ready(function () {

    $('#example_table').DataTable({
        "lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]],
        bFilter: false,
        columnDefs: [{
            'targets': [1, 2, 3, 4, 5, 8, 9, 10, 11, 12], /* column index [0,1,2,3]*/
            'orderable': false, /* true or false */
        }],
        "bPaginate": false,
        bInfo: false
    });
    // $('#example').DataTable();
});

// -----------------------------------------


// ------------- Progressbar Script --------------- //

$('.btn-next').on('click', function () {
    var currentStepNum = $('#checkout-progress').data('current-step');
    var nextStepNum = (currentStepNum + 1);
    var currentStep = $('.step.step-' + currentStepNum);
    var nextStep = $('.step.step-' + nextStepNum);
    var progressBar = $('#checkout-progress');
    $('.btn-prev').removeClass('disabled');
    $('#section' + currentStepNum).toggle();
    $('#section' + nextStepNum).toggle();
    if (nextStepNum == 6) {
        $(this).toggle();
        $('.btn-submit').toggle();
    }
    /*if(nextStepNum == 5){
        $(this).addClass('disabled');
    }*/
    $('.checkout-progress').removeClass('.step-' + currentStepNum).addClass('.step-' + (currentStepNum + 1));

    currentStep.removeClass('active').addClass('valid');
    currentStep.find('span').addClass('opaque');
    currentStep.find('.fa.fa-check').removeClass('opaque');

    nextStep.addClass('active');
    progressBar.removeAttr('class').addClass('step-' + nextStepNum).data('current-step', nextStepNum);
});

$('.btn-submit').on('click', function () {
    // $('.btn-submit').toggle('disabled');
    // $('.btn-prev').toggle();
    var currentStepNum = $('#checkout-progress').data('current-step');
    var currentStep = $('.step.step-' + currentStepNum);
    currentStep.removeClass('active').addClass('valid');
    currentStep.find('.fa.fa-check').removeClass('opaque');
});

$('.btn-prev').on('click', function () {

    var currentStepNum = $('#checkout-progress').data('current-step');
    var prevStepNum = (currentStepNum - 1);
    var currentStep = $('.step.step-' + currentStepNum);
    var prevStep = $('.step.step-' + prevStepNum);
    var progressBar = $('#checkout-progress');
    // $('.btn-next').removeClass('disabled');
    $('#section' + currentStepNum).toggle();
    $('#section' + prevStepNum).toggle();
    if (currentStepNum == 5) {
        $('.btn-submit').toggle();
        // $('.btn-next').toggle();
    }
    if (currentStepNum == 1) {
        return false;
    }
    if (prevStepNum == 1) {
        $(this).addClass('disabled');
    }
    $('.checkout-progress').removeClass('.step-' + currentStepNum).addClass('.step-' + (prevStepNum));

    currentStep.removeClass('active');
    prevStep.find('span').removeClass('opaque');
    prevStep.find('.fa.fa-check').addClass('opaque');

    prevStep.addClass('active').removeClass('valid');
    progressBar.removeAttr('class').addClass('step-' + prevStepNum).data('current-step', prevStepNum);
});

// -------------------------------------------------------------------------------- //




// 

const audioPlayer = document.querySelector(".audio-player");
const audio = new Audio(
    "https://ia800905.us.archive.org/19/items/FREE_background_music_dhalius/backsound.mp3"
);
//credit for song: Adrian kreativaweb@gmail.com

console.dir(audio);

audio.addEventListener(
    "loadeddata",
    () => {
        audioPlayer.querySelector(".time .length").textContent = getTimeCodeFromNum(
            audio.duration
        );
        audio.volume = .75;
    },
    false
);
// 

//click on timeline to skip around
const timeline = audioPlayer.querySelector(".timeline");
timeline.addEventListener("click", e => {
    const timelineWidth = window.getComputedStyle(timeline).width;
    const timeToSeek = e.offsetX / parseInt(timelineWidth) * audio.duration;
    audio.currentTime = timeToSeek;
}, false);

//click volume slider to change volume
const volumeSlider = audioPlayer.querySelector(".controls .volume-slider");
volumeSlider.addEventListener('click', e => {
    const sliderWidth = window.getComputedStyle(volumeSlider).width;
    const newVolume = e.offsetX / parseInt(sliderWidth);
    audio.volume = newVolume;
    audioPlayer.querySelector(".controls .volume-percentage").style.width = newVolume * 100 + '%';
}, false)

//check audio percentage and update time accordingly
setInterval(() => {
    const progressBar = audioPlayer.querySelector(".progress");
    progressBar.style.width = audio.currentTime / audio.duration * 100 + "%";
    audioPlayer.querySelector(".time .current").textContent = getTimeCodeFromNum(
        audio.currentTime
    );
}, 500);

//toggle between playing and pausing on button click
const playBtn = audioPlayer.querySelector(".controls .toggle-play");
playBtn.addEventListener(
    "click",
    () => {
        if (audio.paused) {
            playBtn.classList.remove("play");
            playBtn.classList.add("pause");
            audio.play();
        } else {
            playBtn.classList.remove("pause");
            playBtn.classList.add("play");
            audio.pause();
        }
    },
    false
);

audioPlayer.querySelector(".volume-button").addEventListener("click", () => {
    const volumeEl = audioPlayer.querySelector(".volume-container .volume");
    audio.muted = !audio.muted;
    if (audio.muted) {
        volumeEl.classList.remove("icono-volumeMedium");
        volumeEl.classList.add("icono-volumeMute");
    } else {
        volumeEl.classList.add("icono-volumeMedium");
        volumeEl.classList.remove("icono-volumeMute");
    }
});

//turn 128 seconds into 2:08
function getTimeCodeFromNum(num) {
    let seconds = parseInt(num);
    let minutes = parseInt(seconds / 60);
    seconds -= minutes * 60;
    const hours = parseInt(minutes / 60);
    minutes -= hours * 60;

    if (hours === 0) return `${minutes}:${String(seconds % 60).padStart(2, 0)}`;
    return `${String(hours).padStart(2, 0)}:${minutes}:${String(
        seconds % 60
    ).padStart(2, 0)}`;
}



// -------------------------------------------


// Register form

$('#next_companyflow').click(function () {
    $('#company_register').fadeIn();
    $('#register_form').fadeOut();

})

// ----------------------

// data table

$(function () {
    $('#example').dataTable({
        paging: false,
        fixedHeader: {
            header: true
        },
        dom: 'Bfrtip',
        buttons: [
            {
                extend: 'excel',
                text: 'Excel <span class="glyphicon glyphicon-download-alt" aria-hidden="true"></span>'
            },
            {
                extend: 'pdf',
                text: 'PDF <span class="glyphicon glyphicon-download-alt" aria-hidden="true"></span>'
            },

            'copy',
            'pdf',
            'colvis'
        ],

    });
});



// 




$(window).scroll(function () {
    var sticky = $('.register-header'),
        scroll = $(window).scrollTop();

    if (scroll >= 10) sticky.addClass('fixed');
    else sticky.removeClass('fixed');
});

$(window).scroll(function () {
    var sticky = $('.header-main'),
        scroll = $(window).scrollTop();

    if (scroll >= 100) sticky.addClass('fixed');
    else sticky.removeClass('fixed');
});



$('input[type=radio][name=flexRadioDefault]').change(function () {
    $('.payment-method-wrap').css({ "border": '0px solid #000' })
    if (this.value == 'djs-music') {
        $(this).parents('.payment-method-wrap').css({ "border": '1px solid #000' });
        // ...
    }
    else {
        $(this).parents('.payment-method-wrap').css({ "border": '1px solid #000' });
    }
});




// Input Eye script

$(function () {

    $('#eye').click(function () {

        if ($(this).hasClass('fa-eye-slash')) {

            $(this).removeClass('fa-eye-slash');

            $(this).addClass('fa-eye');

            $('#password').attr('type', 'text');

        } else {

            $(this).removeClass('fa-eye');

            $(this).addClass('fa-eye-slash');

            $('#password').attr('type', 'password');
        }
    });
});

$(function () {

    $('#eye_confirm').click(function () {

        if ($(this).hasClass('fa-eye-slash')) {

            $(this).removeClass('fa-eye-slash');

            $(this).addClass('fa-eye');

            $('#confirm_password').attr('type', 'text');

        } else {

            $(this).removeClass('fa-eye');

            $(this).addClass('fa-eye-slash');

            $('#confirm_password').attr('type', 'password');
        }
    });
});

$(function () {

    $('#eye_login').click(function () {

        if ($(this).hasClass('fa-eye-slash')) {

            $(this).removeClass('fa-eye-slash');

            $(this).addClass('fa-eye');

            $('#confirm_password').attr('type', 'text');

        } else {

            $(this).removeClass('fa-eye');

            $(this).addClass('fa-eye-slash');

            $('#confirm_password').attr('type', 'password');
        }
    });
});

// -----------------------------------------------------------------------------------//

// Question Ans Popup

$('.download-link').click(function () {
    $('.download-popup').fadeIn();
    $('.back-drop').fadeIn();
    $('html').css('overflow', 'hidden');
})

$('.reviews-link').click(function () {
    $('.reviews-body').fadeIn();
    $('.back-drop').fadeIn();
    $('.download-popup').fadeOut();
    $('html').css('overflow', 'hidden');
})

$('.modal-close').click(function () {
    $('.download-popup').fadeOut();
    $('.back-drop').fadeOut();
    $('.reviews-body').fadeOut();
    $('html').css('overflow', 'auto');
})

// --------------------------------------------


// Upload Files

var dropFileForm = document.getElementById("dropFileForm");
var fileLabelText = document.getElementById("fileLabelText");
var uploadStatus = document.getElementById("uploadStatus");
var fileInput = document.getElementById("fileInput");
var droppedFiles;

function overrideDefault(event) {
    event.preventDefault();
    event.stopPropagation();
}

function fileHover() {
    dropFileForm.classList.add("fileHover");
}

function fileHoverEnd() {
    dropFileForm.classList.remove("fileHover");
}

function addFiles(event) {
    droppedFiles = event.target.files || event.dataTransfer.files;
    showFiles(droppedFiles);
}

function showFiles(files) {
    if (files.length > 1) {
        fileLabelText.innerText = files.length + " files selected";
    } else {
        fileLabelText.innerText = files[0].name;
    }
}

function uploadFiles(event) {
    event.preventDefault();
    changeStatus("Uploading...");

    var formData = new FormData();

    for (var i = 0, file; (file = droppedFiles[i]); i++) {
        formData.append(fileInput.name, file, file.name);
    }

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function (data) {
        //handle server response and change status of
        //upload process via changeStatus(text)
        console.log(xhr.response);
    };
    xhr.open(dropFileForm.method, dropFileForm.action, true);
    xhr.send(formData);
}

function changeStatus(text) {
    uploadStatus.innerText = text;
}

// -----------------------------------------------

// Company Name Hide Show

$(document).ready(function () {
    //click on Lable
    $("#paypal").on("click", function () {
        check = $(this).prop("checked");
        $(".visacard").fadeOut();
    })
    //click on Solo
    $("#credit").on("click", function () {
        check = $(this).prop("checked");
        $(".visacard").fadeIn();
    })
});


// ---------------------------------------------------


// Company Name Hide Show

$(document).ready(function () {
    //click on Lable
    $("#lableselect").on("click", function () {
        check = $(this).prop("checked");
        $(".companys-name").fadeIn();
    })
    //click on Solo
    $("#soloselect").on("click", function () {
        check = $(this).prop("checked");
        $(".companys-name").fadeOut();
    })
});


// ---------------------------------------------------


// Artist & Dj's Radio Button Select
// $('.submit-form').click(function () {
//     const radio = $('input[name="flexRadioDefault"]:checked').val();
//     if (radio == "artistmusic") {
//         window.location.href = "artist-register.html";
//     } else {
//         window.location.href = "djs-register.html";
//     }
// })
$('.submit-form').click(function () {
    const radio = $('input[name="flexRadioDefault"]:checked').val();
    if (radio == "artistmusic") {
        window.location.href = "artist-register.html";
    } else {
        window.location.href = "../dj/registration.html";
    }
})
// ----------------------------------




// Payment Successfull

$('.confirm_payment').click(function () {
    $('.payment-popup').fadeIn();
    $('.back-drop').fadeIn();
    $('html').css('overflow', 'hidden');
})

$('.submit-form').click(function () {
    $('.payment-popup').fadeOut();
    $('.back-drop').fadeOut();
    $('html').css('overflow', 'auto');
})

// ---------------------------------

// Logout


$('.logout_btn').click(function () {
    $('.back-drop').fadeIn();
    $('.log_out').fadeIn();
    $('html').css('overflow', 'hidden');
})
$('.close-log').click(function () {
    $('.log_out').fadeOut();
    $('.back-drop').fadeOut();
    $('html').css('overflow', 'auto');
})

// -------------------------------------------------------------------------






// $('#continue-popup').click(function(){
// 	$('.choose-payment').fadeIn();
// 	$('.back-drop').fadeIn();
// })

// Image Upload

imgInp.onchange = evt => {
    const [file] = imgInp.files
    if (file) {
        blah.src = URL.createObjectURL(file)
    }
}

// -----------------------------------------------------------------------------//



// Input Eye script

// $(function () {

//     $('#eye').click(function () {

//         if ($(this).hasClass('fa-eye-slash')) {

//             $(this).removeClass('fa-eye-slash');

//             $(this).addClass('fa-eye');

//             $('#password').attr('type', 'text');

//         } else {

//             $(this).removeClass('fa-eye');

//             $(this).addClass('fa-eye-slash');

//             $('#password').attr('type', 'password');
//         }
//     });
// });

// -----------------------------------------------------------------------------------//


