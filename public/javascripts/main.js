$( ()=> { 
    $('#btn').click(()=>{
        $('section.index.form').addClass('active')
    })
    $('.modal').click(()=>{
        $('section.index.form').removeClass('active')
    })
    $('.modal .modal-content').click(()=>{
        $('section.index.form').addClass('active')
    })
    $('button.close').click(()=>{
        $('section.index.form').removeClass('active')
    }) 
    $('.input_drop').click(function(){
        let dropText = $(this).text()
        $('input#form3').val(dropText)
    })
    $('#clickBtnDopFunction').click(()=>{
        $('.dopFunctionTable').fadeToggle(500)
    })
    const socket = io.connect("/")
})