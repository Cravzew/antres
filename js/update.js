$(document).ready(function(){

	$('form.ajax').submit(function(e){
		$.ajax({
			url: "/mains/submit_form",
			type:   'POST',
			data: $(this).serialize(),
			success: function(result){
				$('.modal').modal('hide');

				$('#thanksModal').modal('show');
			}
		});
		return false;
	});

	$('.show-news').click(function(e){
		$('.news-one').show();
		$(this).hide();
		return false;
	});
	
	$('#catalogAsideAccordion input').change(function(e){
		$('.news-one').show();
		$.ajax({
			url: "/catalogs/get_literal_count",
			type:   'POST',
			data: $('#catalogAsideAccordion').serialize(),
			success: function(result){
				$('.filter-count').text(result);
			}
		});
		return false;
	});
	
	$('.catalogs-show-more').click(function(e){
		$.ajax({
			url: "/catalogs/get_one_page/"+$(this).attr('data-url')+"/"+$(this).attr('data-page'),
			type:   'POST',
			data: {
				pid:$('.catalog-aside input[name="pid"]').length?$('.catalog-aside input[name="pid"]').val():0
			},
			success: function(result){
				let obj=JSON.parse(result);
				if(obj.page_num){
					$('.catalogs-show-more').attr('data-page',obj.page_num);
				}
				else{
					$('.catalogs-show-more').hide();
				}
				$('.catalog-list .row').append(obj.items);
			}
		});
		return false;
	});
	
	$('.remove-filter').click(function(e){
		$('#checkbox'+$(this).attr('data-id')).prop('checked',false);
		$('#catalogAsideAccordion button[name=filters_submit]').trigger('click');
		return false;
	});
	
	$('button[data-target="#writeUsModal"][data-toggle="modal"]').click(function(){
		$('#writeUsModal input[name=type]').val($(this).attr('data-type'));
		$('#writeUsModal input[name=item_id]').val($(this).attr('data-id'));
	});
});