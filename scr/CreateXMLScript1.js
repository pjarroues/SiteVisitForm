$(function () {
  $('#DownloadButton').click(update);
});

var template = [
'<?xml version="1.0"?>',
'<?xml-stylesheet type="text/xsl" href="SiteVisitFO.xslt"?>',
'<SiteVisitForm xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="SiteVisit.xsd">',
'<SiteVisit>',
'<Project_ID><?Project_ID?></Project_ID>',
'<NewProject><?NewProject?></NewProject>',
'<Personnel><?Personnel?></Personnel>',
'<Activity_Start_Date><?Activity_Start_Date?></Activity_Start_Date>',
'<time><?time?></time>',
'<SiteVisitCode><?SiteVisitCode?></SiteVisitCode>',
'<Station_Name><?Station_Name?></Station_Name>', 
'<Station_Description><?Station_Description?></Station_Description>', 
'<Station_ID><?Station_ID?></Station_ID>',
'<Station_Type><?Station_Type?></Station_Type>', 
'<Basin><?Basin?></Basin>',
'<HUC_8_Digit><?HUC_8_Digit?></HUC_8_Digit>', 
'<State>MT</State>',		
'<County><?County?></County>', 
'<Latitude><?Latitude?></Latitude>', 
'<Longitude><?Longitude?></Longitude>', 
'<accuracy><?accuracy?></accuracy>', 
'<Elevation><?Elevation?></Elevation>', 
'<Elevation_Unit><?Elevation_Unit?></Elevation_Unit>', 
'<Geopositioning_Method><?Geopositioning_Method?></Geopositioning_Method>', 
'<Geopositioning_Datum><?Geopositioning_Datum?></Geopositioning_Datum>',
'<Anticipated_Visits><?Anticipated_Visits?></Anticipated_Visits>',
'<Station_Visit_Number><?Station_Visit_Number?></Station_Visit_Number>', 
'<Comp><?Comp?></Comp>', 
'<AFDW><?AFDW?></AFDW>', 
'<Vis><?Vis?></Vis>',
'<FieldForms><?FieldForms?></FieldForms>', 
'<DataLoggers><?DataLoggers?></DataLoggers>',
'<Dry><?Dry?></Dry>', 
'<Stranded_Pools><?Pool?></Stranded_Pools>',
'<TransF><?TransF?></TransF>', 
'<sitelength><?sitelength?></sitelength>', 
'<width><?width?></width>', 
'<Tlength><?Tlength?></Tlength>', 
'<Notes><?Notes?></Notes>', 
'<lab><?lab?></lab>',
'<LIMS_Account_Number><?LIMS_Account_Number?></LIMS_Account_Number>', 
'<Tcontract><?Tcontract?></Tcontract>', 
'<invoice><?invoice?></invoice>',
'<contact><?contact?></contact>', 
'<phone><?phone?></phone>', 
'<RelBy1><?RelBy1?></RelBy1>', 
'<Ship1><?Ship1?></Ship1>', 
'<COC_Received_By><?COC_Received_By?></COC_Received_By>',
'<Date_COC_Received><?Date_COC_Received?></Date_COC_Received>',
'<RelBy2><?RelBy2?></RelBy2>', 
'<Ship2><?Ship2?></Ship2>', 
'<RelTo2><?RelTo2?></RelTo2>', 
'<wetTemp><?wetTemp?></wetTemp>', 
'<dryTemp><?dryTemp?></dryTemp>', 

//'<Activity_Start_Date><?Station_Visit_Date?></Activity_Start_Date>',
'<Activity_Start_Time><?Activity_Start_Time?></Activity_Start_Time>',
 

'</SiteVisit>',

'<Chla>',
'<Activity_ID><?Benthic?></Activity_ID>',
'<Transect>Transect A</Transect>',
'<Activity_Transect><?transectA?></Activity_Transect>',
'</Chla>',
'<Chla>',
'<Activity_ID><?Benthic?></Activity_ID>',
'<Transect>Transect B</Transect>',
'<Activity_Transect><?transectB?></Activity_Transect>',
'</Chla>',
'<Chla>',
'<Activity_ID><?Benthic?></Activity_ID>',
'<Transect>Transect C</Transect>',
 '<Activity_Transect><?transectC?></Activity_Transect>',
 '</Chla>',
'<Chla>',
'<Activity_ID><?Benthic?></Activity_ID>',
'<Transect>Transect D</Transect>',
'<Activity_Transect><?transectD?></Activity_Transect>',
'</Chla>',
'<Chla>',
'<Activity_ID><?Benthic?></Activity_ID>',
'<Transect>Transect E</Transect>',
'<Activity_Transect><?transectE?></Activity_Transect>',
'</Chla>',
'<Chla>',
'<Activity_ID><?Benthic?></Activity_ID>',
'<Transect>Transect F</Transect>',
'<Activity_Transect><?transectF?></Activity_Transect>',
'</Chla>',
'<Chla>',
'<Activity_ID><?Benthic?></Activity_ID>',
'<Transect>Transect G</Transect>',
'<Activity_Transect><?transectG?></Activity_Transect>',
'</Chla>',
'<Chla>',
'<Activity_ID><?Benthic?></Activity_ID>',
'<Transect>Transect H</Transect>',
'<Activity_Transect><?transectH?></Activity_Transect>',
'</Chla>',
'<Chla>',
'<Activity_ID><?Benthic?></Activity_ID>',
'<Transect>Transect I</Transect>',
'<Activity_Transect><?transectI?></Activity_Transect>',
'</Chla>',
'<Chla>',
'<Activity_ID><?Benthic?></Activity_ID>',
'<Transect>Transect J</Transect>',
'<Activity_Transect><?transectJ?></Activity_Transect>',
'</Chla>',
'<Chla>',
'<Activity_ID><?Benthic?></Activity_ID>',
'<Transect>Transect K</Transect>',
'<Activity_Transect><?transectK?></Activity_Transect>',
'</Chla>',
'<Chla>',
'<Activity_ID><?Benthic?></Activity_ID>',
'<Transect>Transect L</Transect>',
'<Activity_Transect><?transectL?></Activity_Transect>',
'</Chla>',
'<Chla>',
'<Activity_ID><?Benthic?></Activity_ID>',
'<Transect>Transect M</Transect>',
'<Activity_Transect><?transectM?></Activity_Transect>',
'</Chla>',
'<Chla>',
'<Activity_ID><?Benthic?></Activity_ID>',
'<Transect>Transect N</Transect>',
'<Activity_Transect><?transectN?></Activity_Transect>',
'</Chla>',
'<Chla>',
'<Activity_ID><?Benthic?></Activity_ID>',
'<Transect>Transect O</Transect>',
'<Activity_Transect><?transectO?></Activity_Transect>',
'</Chla>',
'<Chla>',
'<Activity_ID><?Benthic?></Activity_ID>',
'<Transect>Transect P</Transect>',
'<Activity_Transect><?transectP?></Activity_Transect>',
'</Chla>',

'<Sample>',
'<Activity_ID><?WSampleID?></Activity_ID>',
'<Sample_Collection_Method_ID><?Collection?></Sample_Collection_Method_ID>',
'<analyte><?Analysis?></analyte>',
'<handling><?handling?></handling>',
'<Preserve><?preserve?></Preserve>', 
'<cool><?cool?></cool>',
'</Sample>',
'<Sample>',
'<Activity_ID><?WSampleID?></Activity_ID>',
'<Sample_Collection_Method_ID><?Collection?></Sample_Collection_Method_ID>',
'<analyte><?Analysis1?></analyte>',
'<handling><?handling1?></handling>',
'<Preserve><?preserve1?></Preserve>', 
'<cool><?cool1?></cool>',
'</Sample>',
'<Sample>',
'<Activity_ID><?WSampleID?></Activity_ID>',
'<Sample_Collection_Method_ID><?Collection?></Sample_Collection_Method_ID>',
'<analyte><?Analysis2?></analyte>',
'<handling><?handling2?></handling>',
'<Preserve><?preserve2?></Preserve>', 
'<cool><?cool2?></cool>',
'</Sample>',
'<Sample>',
'<Activity_ID><?WSampleID?></Activity_ID>',
'<Sample_Collection_Method_ID><?Collection?></Sample_Collection_Method_ID>',
'<analyte><?Analysis3?></analyte>',
'<handling><?handling3?></handling>',
'<Preserve><?preserve3?></Preserve>', 
'<cool><?cool3?></cool>',
'</Sample>',
'<Sample>',
'<Activity_ID><?WSampleID?></Activity_ID>',
'<Sample_Collection_Method_ID><?Collection?></Sample_Collection_Method_ID>',
'<analyte><?Analysis4?></analyte>',
'<handling><?handling4?></handling>',
'<Duplicate><?Duplicate4?></Duplicate>',
'<Preserve><?preserve4?></Preserve>', 
'<cool><?cool4?></cool>',
'</Sample>',
'<Sample>',
'<Activity_ID><?WSampleID?></Activity_ID>',
'<Sample_Collection_Method_ID><?Collection?></Sample_Collection_Method_ID>',
'<analyte><?Analysis5?></analyte>',
'<handling><?handling5?></handling>',
'<Duplicate><?Duplicate5?></Duplicate>',
'<Preserve><?preserve5?></Preserve>', 
'<cool><?cool5?></cool>',
'</Sample>',
//'<Activity>',
//'<Activity_ID><?ID2SampleID?></Activity_ID>', 
//'<Sample_Collection_Method_ID><?cCollection?></Sample_Collection_Method_ID>',
//'<analyte><?analyte?></analyte>', 
//'<Preserve><?preserve?></Preserve>', 
//'<cool><?cool?></cool>',
//'</Activity>',
'<Activity>',
'<Activity_ID><?WSampleID1?></Activity_ID>',
'<Sample_Collection_Method_ID><?CollectionFB?></Sample_Collection_Method_ID>',
'<analyte><?ID2_Analysis?></analyte>',
//'<Preserve><?ID2_preserve?></Preserve>', 
//'<cool><?ID2_cool?></cool>',
'</Activity>',
'<Activity>',
'<Activity_ID><?BactSampleID?></Activity_ID>',
'<analyte><?Bactanalyte?></analyte>', 
'<Preserve><?PreservedIn?></Preserve>',
'</Activity>',
'<Activity>',
'<Activity_ID><?BactQASampleID?></Activity_ID>',
'<analyte><?Bactanalyte_2?></analyte>', 
'<Preserve><?PreservedIn_2?></Preserve>',
'</Activity>',
'<Activity>',
'<Activity_ID><?SedSampleID?></Activity_ID>',
'<analyte><?sedanalyte?></analyte>', 
'<Preserve><?Preserved?></Preserve>',
'</Activity>',
'<Activity>',
'<Activity_ID><?sedQASampleID?></Activity_ID>',
'<analyte><?sedanalyte_2?></analyte>', 
'<Preserve><?Preserved_2?></Preserve>',
'</Activity>',
'<Activity>',
'<Activity_ID><?phyChla?></Activity_ID>',
'<Activity_Comment><?D1?></Activity_Comment>',
'</Activity>',
'<Activity>',
'<Activity_ID><?phyChla2?></Activity_ID>',
'<Activity_Comment><?D2?></Activity_Comment>',
'</Activity>',
'<Activity>',
'<Activity_ID><?CNPSample?></Activity_ID>',
'<Activity_Comment><?CNP1?></Activity_Comment>', 
'</Activity>',
'<Activity>',
'<Activity_ID><?CNPSample2?></Activity_ID>',
'<Activity_Comment><?CNP2?></Activity_Comment>',
'</Activity>',
'<Activity>',
'<Activity_ID><?algaeID?></Activity_ID>', 
'<Sample_Collection_Method_ID><?algae?></Sample_Collection_Method_ID>', 
'<Activity_Comment><?textOther?></Activity_Comment>',
'</Activity>',
'<Activity>',
'<Activity_ID><?QAalgae?></Activity_ID>', 
'<Sample_Collection_Method_ID><?QAalgae1?></Sample_Collection_Method_ID>', 
'<Activity_Comment><?QAtextOther?></Activity_Comment>',
'</Activity>',
'<Activity>',
'<Activity_ID><?macrosID?></Activity_ID>', 
'<Sample_Collection_Method_ID><?Macros?></Sample_Collection_Method_ID>',
'<Activity_Comment><?jars?></Activity_Comment>',
'</Activity>',
'<Activity>',
'<Activity_ID><?QAmacros?></Activity_ID>', 
'<Sample_Collection_Method_ID><?QAMacros1?></Sample_Collection_Method_ID>',
'<Activity_Comment><?QAJars?></Activity_Comment>',
'</Activity>',

'<field>',
'<Activity_Start_Time><?Activity_Start_Time?></Activity_Start_Time>',
'<Characteristic_Name>Temperature, water</Characteristic_Name>',		
'<Result_Value><?Wtemp?></Result_Value>', 
'<Result_Value_Unit><?temp?></Result_Value_Unit>',
'</field>',
'<field>',
'<Activity_Start_Time><?Activity_Start_Time?></Activity_Start_Time>',
'<Characteristic_Name>Temperature, air</Characteristic_Name>',
'<Result_Value><?TempA?></Result_Value>', 
'<Result_Value_Unit><?Atemp?></Result_Value_Unit>', 
'</field>',
'<field>',
'<Activity_Start_Time><?Activity_Start_Time?></Activity_Start_Time>',
'<Characteristic_Name>Specific conductance</Characteristic_Name>',
'<Result_Value><?SC?></Result_Value>',
'<Result_Value_Unit>uS/cm</Result_Value_Unit>',
'</field>',
'<field>',
'<Activity_Start_Time><?Activity_Start_Time?></Activity_Start_Time>',
'<Characteristic_Name>pH</Characteristic_Name>',		
'<Result_Value><?PH?></Result_Value>',
'<Result_Value_Unit>None</Result_Value_Unit>',
'</field>',
'<field>',
'<Activity_Start_Time><?Activity_Start_Time?></Activity_Start_Time>',
'<Characteristic_Name>Dissolved oxygen (DO)</Characteristic_Name>',		
'<Result_Value><?DO?></Result_Value>',
'<Result_Value_Unit>mg/l</Result_Value_Unit>',
'</field>',
'<field>',
'<Activity_Start_Time><?Activity_Start_Time?></Activity_Start_Time>',
'<Characteristic_Name>Dissolved oxygen saturation</Characteristic_Name>',		
'<Result_Value><?SAT?></Result_Value>',
'<Result_Value_Unit>%</Result_Value_Unit>',
'</field>',
'<field>',
'<Activity_Start_Time><?Activity_Start_Time?></Activity_Start_Time>',
'<Characteristic_Name>Barometric pressure</Characteristic_Name>',		
'<Result_Value><?BAR?></Result_Value>',
'<Result_Value_Unit>mmHg</Result_Value_Unit>',
'</field>',
'<field>',
'<Activity_Start_Time><?Activity_Start_Time?></Activity_Start_Time>',
'<Characteristic_Name>RBP Turbidity Code (choice list)</Characteristic_Name>',		
'<Result_Value><?RBP?></Result_Value>',
'<Result_Value_Unit></Result_Value_Unit>',
'</field>',
'<field>',
'<Activity_Start_Time><?Activity_Start_Time?></Activity_Start_Time>',
'<Characteristic_Name>Turbidity</Characteristic_Name>',
'<Result_Value><?TURB?></Result_Value>',
'<Result_Value_Unit>NTU</Result_Value_Unit>',
'</field>',
'<field>',
'<Activity_Start_Time><?Activity_Start_Time?></Activity_Start_Time>',
'<Characteristic_Name>Flow</Characteristic_Name>',
'<Result_Value><?FLOW?></Result_Value>',
'<Result_Value_Unit>cfs</Result_Value_Unit>',
'<Analytical_Method><?Method?></Analytical_Method>',
 
'</field>',

  '</SiteVisitForm>',
].join('\r\n');

function update() {
  var variables = {
'SiteVisitCode': $('#SiteVisitCode').val(),
'Basin': $('#Basin').val(),
'Anticipated_Visits': $('#Anticipated_Visits').val(),
'Project_ID': $('#Project_ID').val(),
'NewProject': $('#NewProject').val(),
'Activity_Start_Date': $('#datepicker').val(),
'time': $('#time').val()+ ":00",
'Personnel':$('#Personnel').val(),
'Station_Name': $('#Station_Name').val(),
'Station_Description': $('#Station_Description').val(),
'Station_Type': $('#Station_Type').val(),
'Station_ID': $('#Station_ID').val(),
'Station_Visit_Number': $('#Station_Visit_Number').val(),
'HUC_8_Digit': $('#HUC_8_Digit').val(),
'County': $('#County').val(),
'Latitude': $('#Latitude').val(),
'Longitude': $('#Longitude').val(),
'accuracy': $('#accuracy').val(),
'Elevation': $('#Elevation').val(),
'Elevation_Unit':$('input[name="Elevation"]:checked').val(),
'Geopositioning_Method': $('#Geopositioning_Method').val(),
'Geopositioning_Datum': $('#Geopositioning_Datum').val(),
'WSampleID': $('#WSampleID').val(),
'Collection': $('input[name="Collection"]:checked').val(),
'Analysis': $('#analysis0').val(),
'handling': $('#handling0').val(),
'preserve': $('#preserve0').val(),
'cool': $('#cool0').val(),
'Analysis1': $('#analysis1').val(),
'handling1': $('#handling1').val(),
'preserve1': $('#preserve1').val(),
'cool1': $('#cool1').val(),
'Analysis2': $('#analysis2').val(),
'handling2': $('#handling2').val(),
'preserve2': $('#preserve2').val(),
'cool2': $('#cool2').val(),
'Analysis3': $('#analysis3').val(),
'handling3': $('#handling3').val(),
'preserve3': $('#preserve3').val(),
'cool3': $('#cool3').val(),
'Analysis4': $('#analysis4').val(),
'handling4': $('#handling4').val(),
'preserve4': $('#preserve4').val(),
'cool4': $('#cool4').val(),
'WSampleID1': $('#WSampleID1').val(),
'CollectionFB': $('input[name="CollectionFB"]:checked').val(),
//'analyte': $('#analyte').val(),
//'preserve': $('#preserve').val(),
//'cool': $('#cool').val(),
//'ID2_SampleID':$('#WSampleID1').val () + $('#ID2_SampleID').val(),
//'ID2_Collection': $('input[name="ID2_Collection"]:checked').val(),
'ID2_Analysis': $('#ID2_Analysis').val(),
'BactSampleID': $('#BactSampleID').val(),
'Bactanalyte': $('#Bactanalyte').val(),
'PreservedIn': $('#PreservedIn').val(),
'BactQASampleID': $('#BactQASampleID').val(),
'Bactanalyte_2': $('#Bactanalyte_2').val(),
'PreservedIn_2': $('#PreservedIn_2').val(),
'SedSampleID': $('#SedSampleID').val(),
'sedanalyte': $('#sedanalyte').val(),
'Preserved': $('#Preserved').val(),
'sedQASampleID': $('#sedQASampleID').val(),
'sedanalyte_2': $('#sedanalyte_2').val(),
'Preserved_2': $('#Preserved_2').val(),
'Benthic': $('#Benthic').val(),
'Comp': $('#chkComp').is(':checked'),
'AFDW': $('#chkAFDW').is(':checked'),
'Vis': $('#chkVis').is(':checked'),
'transectA': $('#transectA').val(),
'transectB': $('#transectB').val(),
'transectC': $('#transectC').val(),
'transectD': $('#transectD').val(),
'transectE': $('#transectE').val(),
'transectF': $('#transectF').val(),
'transectG': $('#transectG').val(),
'transectH': $('#transectH').val(),
'transectI': $('#transectI').val(),
'transectJ': $('#transectJ').val(),
'transectK': $('#transectK').val(),
'transectL': $('#transectL').val(),
'transectM': $('#transectM').val(),
'transectN': $('#transectN').val(),
'transectO': $('#transectO').val(),
'transectP': $('#transectP').val(),
'phyChla': $('#phyChla').val() +"-D1",
'D1': "Volume Filtered: " + $('#D1').val() + " mL",
'phyChla2': $('#phyChla').val() +"-D2",
'D2': "Volume Filtered: " + $('#D2').val() + " mL",
'CNPSample': $('#CNPSample').val() + "-D1",
'CNP1': "Volume Filtered: " + $('#CNP1').val() + " mL",
'CNPSample2': $('#CNPSample').val() + "-D2",
'CNP2': "Volume Filtered: " + $('#CNP2').val() + " mL",
'algaeID': $('#algaeID').val(),
'algae': $('input[name="algae"]:checked').val(),
'textOther': $('#textOther').val(),
'QAalgae': $('#QAalgae').val(),
'QAalgae1': $('input[name="QAalgae1"]:checked').val(),
'QAtextOther': $('#QAtextOther').val(),
'macrosID': $('#macrosID').val(),
'Macros': $('input[name="Macros"]:checked').val(),
'jars': $('#jars').val(),
'QAmacros': $('#QAmacros').val(),
'QAMacros1': $('input[name="QAMacros1"]:checked').val(),
'QAJars': $('#QAJars').val(),
'Activity_Start_Time': $('#Activity_Start_Time').val()+ ":00",
'Wtemp': $('#Wtemp').val(),
'temp': $('input[name="temp"]:checked').val(),
'TempA': $('#TempA').val(),
'Atemp': $('input[name="Atemp"]:checked').val(),
'SC': $('#SC').val(),
'PH': $('#PH').val(),
'DO': $('#DO').val(),
'SAT': $('#SAT').val(),
'BAR': $('#BAR').val(),
'RBP': $('#RBP').val(),
'TURB': $('#TURB').val(),
'FLOW': $('#FLOW').val(),
'Dry': $('input[name="Dry"]:checked').val(),
'Pool': $('input[name="Pool"]:checked').val(),
'Method': $('#Method').val(),
'FieldForms': $('#FieldForms').val(),
'DataLoggers': $('#DataLoggers').val(),
'TransF': $('#chktrF').is(':checked'),
'sitelength': $('#sitelength').val(),
'width': $('#width').val(),
'Tlength': $('#Tlength').val(),
'Notes': $('textarea#Notes').val(),
'lab': $('#lab').val(),
'LIMS_Account_Number': $('#LIMS_Account_Number').val(),
'Tcontract': $('#Tcontract').val(),
'invoice': $('#invoice').val(),
'contact': $('#contact').val(),
'phone': $('#phone').val(),
'RelBy1': $('#RelBy1').val(),
'Ship1': $('#Ship1').val(),
'COC_Received_By': $('#COC_Received_By').val(),
'Date_COC_Received': $('#Date_COC_Received').val(),
'RelBy2': $('#RelBy2').val(),
'Ship2': $('#Ship2').val(),
'RelTo2': $('#RelTo2').val(),
'wetTemp': $('#wetTemp').val()+ "deg C",
'dryTemp': $('#dryTemp').val() + "deg C"
  };

  var newXml = template.replace(/<\?(\w+)\?>/g,
    function(match, name) {
      return variables[name];
    });
 

  $('#ResultXml').val(newXml);
  $('#SaveLink')
    .attr('href', 'data:text/xml;base64,' + btoa(newXml))
    .attr('download', 'SiteVisit.xml')
  $('#generated').show();
}

if (!window.btoa) {
  // Source: http://www.koders.com/javascript/fid78168FE1380F7420FB7B7CD8BAEAE58929523C17.aspx
  btoa = function (input) {
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

    var result = '';
    var chr1, chr2, chr3;
    var enc1, enc2, enc3, enc4;
    var i = 0;

    do {
      chr1 = input.charCodeAt(i++);
      chr2 = input.charCodeAt(i++);
      chr3 = input.charCodeAt(i++);

      enc1 = chr1 >> 2;
      enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
      enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
      enc4 = chr3 & 63;

      if (isNaN(chr2)) {
        enc3 = enc4 = 64;
      } else if (isNaN(chr3)) {
        enc4 = 64;
      }

      result += chars.charAt(enc1) + chars.charAt(enc2) + chars.charAt(enc3) + chars.charAt(enc4);
    } while (i < input.length);

    return result;
  };
}
