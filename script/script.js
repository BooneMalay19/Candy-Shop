$(document).ready(

    function(){

        $('.grid').isotope({

            itemSelector:'.item',

        });

    $('.filterBtnGroup').on('click','li',function(){

        var filtervalue= $(this).attr('data-filter');

        $('.grid').isotope({filter:filtervalue});

        $('.filterBtnGroup li').removeClass('active');

        $(this).addClas('active');

    });

   

   

    });