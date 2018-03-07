jQuery(document).ready(function($) {
	console.log(schedule_calendar.business_hours);
	
	var businessRegularHours = [];
	$.each( schedule_calendar.business_hours, function( index, dayObject ) {
		var newDayObject = {
				dow: [index],
				start: dayObject.open,
				end: dayObject.close
				
		};
		businessRegularHours.push( newDayObject );
		});
	console.log( businessRegularHours );
	
	$(schedule_calendar.container_id).fullCalendar({
		height: 'auto',
		timezone:'local',
		defaultView: 'agendaWeek',
		minTime: '6:00',
		maxTime: '21:00',
		slotDuration: '0:30:00',
		slotLabelFormat: 'hh:mm a',
		businessHours: businessRegularHours,
		selectConstraint: "businessHours",
		
		sourceKey: 'all',

		header: {
			left: 'prev,next,myCustomButton',
			center: 'title',
			right: 'today, agendaDay,agendaWeek,month',
		},
		
		customButtons: {
	        myCustomButton: {
	            text: 'Sunny',
	            id:'sdasd',
	            click: function( event) {
	            	$(this).addClass('fc-state-active');
	            	schedule_calendar.sourceKey = 
	            	
	            	$(schedule_calendar.container_id).fullCalendar( 'refetchEvents' )
	            }
	        }
	    },

		views: {
	        agendaFourDay: {
	            type: 'agendaWeek',
	            buttonText: '4 day',
	            eventSources: [
	    			// your event source
	    			{
	    				url: schedule_calendar.ajax_url,
	    				type: 'POST',
	    				data: {
	    					action: 'get_appointments_list',
	    				},
	    				error: function () {
//	    					alert(
//	    						'there was an error while fetching events!'
//	    					);
	    				},

	    				color: '#0073aa', // a non-ajax option
	    				textColor: '#ffffff', // a non-ajax option
	    			},

	    			// any other sources...
	    		]
	        }
	    },
	    events: function(start, end, timezone, callback) {
	        $.post({
	        	url: schedule_calendar.ajax_url,
	            data: {
	                start: start.unix(),
	                end: end.unix(),
	                action: 'get_schedule_list',
					provider_id: $(schedule_calendar.provider_selector_id+' option:selected').val(),
	            },
	            success: function( events) {
	                callback(events);
	            }
	        });
	    },
	    //		eventSources: [
//			// your event source
//			{
//				url: schedule_calendar.ajax_url,
//				type: 'POST',
//				data: {
//					action: 'get_schedule_list',
//					provider_id: $(schedule_calendar.provider_selector_id+' option:selected').val(),
//					
//				},
//				error: function () {
////					alert(
////						'there was an error while fetching events!'
////					);
//				},
//
//				color: '#0073aa', // a non-ajax option
//				textColor: '#ffffff', // a non-ajax option
//			},
//
//			// any other sources...
//		],

		editable: false,
		eventClick: function(calEvent, jsEvent, view) {
			console.log(calEvent);
			
			$('#form-edit-schedule input[name=date]').val( calEvent.start.format('YYYY-MM-DD'));
			tb_show("Edit Schedule","#TB_inline?inlineId=form-edit-schedule",null);

	    },
		/*********************/
		selectable: true,
		select: function (
			start,
			end,
			allDay,
			jsEvent,
			view
		) {
			alert(
				'hello you clicked on' +
					start.format() +
					'-' +
					end.format()
			);
//			$('#add-appointment-modal')
//				.data('event', {
//					start: start,
//					end: end.subtract(1, 'minute'),
//				})
//				.dialog('open');
		},
	});
	
	
	$(schedule_calendar.provider_selector_id).change(function(){
//		alert($(this).val());
		$(schedule_calendar.container_id).trigger('change').fullCalendar('refetchEvents');
	});
});