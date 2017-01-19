@s_events.each do |s_event|
  json.set! s_event.id do
    json.partial! 's_event', s_event: s_event
  end
end
