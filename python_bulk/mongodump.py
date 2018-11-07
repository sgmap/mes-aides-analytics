# Usage: python mongodump.py | ssh -T root@mes-aides.gouv.fr > mongodump.bson

import datetime
import json

start = datetime.datetime.combine(datetime.date.today(), datetime.datetime.min.time())
end = start + datetime.timedelta(1)

start_timestamp_millis = int(start.strftime('%s')) * 1000
end_timestamp_millis = int(end.strftime('%s')) * 1000

# mongodump does not accept "extended JSON"
# We need to provide dates a timestamps, with milliseconds
filter_query = {
    "dateDeValeur": {
        "$gte": {
            "$date": start_timestamp_millis
        },
        "$lte": {
            "$date": end_timestamp_millis
        }
    }
}

print 'mongodump -d dds -c situations  -q \'%s\' -o -' % (json.dumps(filter_query))
