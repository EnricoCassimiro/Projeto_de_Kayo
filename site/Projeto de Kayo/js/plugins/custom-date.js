var themeDateFormat = jQuery('#pp_reservation_date_format').val();
if(themeDateFormat == '')
{
	themeDateFormat = 'mm/dd/yy';
}

jQuery('.pp_date').datepicker({
    dateFormat:themeDateFormat,
    numberOfMonths: 1,
    defaultDate: new Date()
}).datepicker("setDate", new Date());