    function formSubmit()
    {
                document.getElementById("SiteVisit").action = "mailto:foo@boo.gov?cc=" + document.getElementById("COC_Received_By").value + "&subject=Site%20Visit%20Form";
                document.getElementById("SiteVisit").submit();
    }


    function formSubmit2()
    {
                document.getElementById("SiteVisit").action = "mailto:foo@boo.gov?cc=" + document.getElementById("RelTo2").value + "&subject=Site%20Visit%20Form";
                document.getElementById("SiteVisit").submit();
    }
  

        $(document).on('pageinit', function() {
         var Workplans;
        $('#btnxml').click(function() {
            getXML();
        });
        $("#Project_ID").change(function () {
            var selectedIndex = $('#Project_ID option').index($('#Project_ID option:selected')),
                Workplan = $(Workplans[selectedIndex]);
            $('#Basin').val(Workplan.find('Area').text());
            $('#Station_Name').val(Workplan.find('Station_Name').text());
            $('#Station_Description').val(Workplan.find('Station_Description').text());
            $('#Station_ID').val(Workplan.find('Station_ID').text());
            $('#Latitude').val(Workplan.find('Latitude').text());
            $('#Longitude').val(Workplan.find('Longitude').text());
            $('#HUC_8_Digit').val(Workplan.find('HUC_8_Digit').text());
            $('#County').val(Workplan.find('County').text());
            $('#Anticipated_Visits').val(Workplan.find('Anticipated_Visits').text());
        });
   
        function getXML(){
            $.ajax({
            type: "GET",
            url: "http://WorkplanReview.xml",
            dataType: "xml",
            success: function (xml) {
          
            Workplans = $(xml).find('Workplan');
        
            Workplans.each(function () {
                var Project_ID = $(this).find('Project_ID').text();
                $("#Project_ID").append("<option>" + Project_ID + "</option>");
            });

            $("#Project_ID").trigger('change');
                }
            });
            }
        
    });
   

		$(function() {
			$("#date-input" ).date();
		});


                $(function() {
                    $("#lat").mask("99-99999");
                    $("#long").mask("-999-99999");
                            }
                    );


                function getLocationConstant()
                {
                    if(navigator.geolocation)
                {
                    navigator.geolocation.getCurrentPosition(onGeoSuccess,onGeoError);  
                } else {
                alert("Your browser or device doesn't support Geolocation");
                }
                }

            // If we have a successful location update
                function onGeoSuccess(event)
                {
                    document.getElementById("Latitude").value =  event.coords.latitude; 
                    document.getElementById("Longitude").value = event.coords.longitude;
                    document.getElementById("Elevation").value = event.coords.altitude;
                    document.getElementById("accuracy").value = event.coords.accuracy +"% accuracy";
                }

            // If something has gone wrong with the geolocation request
                function onGeoError(event)
                {
                    alert("Error code " + event.code + ". " + event.message);
                }
            

            $("input[name='SiteVisitCode']").on('change', function(){
                var SVCode = document.getElementById('SiteVisitCode');
                    $('#WSampleID').val(SVCode.value +"-W");
                    $("#QASampleID").val(SVCode.value +"-W-FB");
                    $('#BactSampleID').val(SVCode.value +"-B");
                    $("#BactQASampleID").val(SVCode.value +"-B-FD");
                    $("#SedSampleID").val(SVCode.value +"-SED");
                    $("#sedQASampleID").val(SVCode.value +"-SED-FD");
                    $("#Benthic").val(SVCode.value +"-C");
                    $("#phyChla").val(SVCode.value +"-PHY");
                    //$("#D2").val(SVCode.value +"-PHY-R1");
                    $("#CNPSample").val(SVCode.value +"-CNP");
                    $("#algaeID").val(SVCode.value +"-A");
                    $("#QAalgae").val(SVCode.value +"-A-FD");
                    $("#macrosID").val(SVCode.value +"-M");
                    // $("#CNP2").val(SVCode.value +"-QAP");
                    $("#QAmacros").val(SVCode.value +"-M-FD");
            })
     
	

      
  var $transect = $('.trans');

	$transect.on('change', 'select', function() {
    var $this = $(this),
        $parent = $this.parent(),
        $transects = $('.trans');
    
    if($transects.length < 14 && !$parent.next('.trans').length) {
        var ltr = String.fromCharCode(65 + $transects.length);
                    
        $transect
            .clone(true, true)
            .find('select')
               .attr('name', 'transect' + ltr)
                .attr('id', 'transect' + ltr)
                .find('option:eq(0)')
                    .text('Transect ' + ltr)
                .end()
            .end()
            .insertAfter($parent);
    }
});
      

$(function() {
$("#Date_COC_Received" ).date();
});



    function resetForm(id) {
	$('#'+id).each(function(){
	        this.reset();
	});
} 


    var Template = $('#Template');
    var count = 0;
    var nextId = 0;

    Template.find('.removeNew').on('click', function (e) {
        e.preventDefault();
        $(this).closest('.template').remove();
        count--;
    });

    function cloneTemplate(removable) {
  
        var clone = Template.clone(true, true);
        clone.attr('id', clone.attr('id') + nextId);

        clone.find('label[for]').each(function( index ) {
            var elem = $(this);
            elem.attr('for', elem.attr('for') + nextId);
        });

        clone.find('select, input').each(function( index ) {
            var elem = $(this);
            elem.attr('id', elem.attr('id') + nextId);
            elem.attr('name', elem.attr('name') + nextId);
        });

        if (!removable) {
            clone.find('.removeNew').remove();
        }

        clone.insertBefore("#addNew").removeClass('hide');
        count++;
        nextId++;
    }

    // Create First Analyte and delete the remove button.
    cloneTemplate(false);

    $('a.showNew').on('click', function (e) {
        e.preventDefault();
        cloneTemplate(true);
        return false;
    });
