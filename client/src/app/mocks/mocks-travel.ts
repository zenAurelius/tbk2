import {Travel} from '../tbk-domains/Travel';

import {COUNTRIES} from './mocks-country';

export const TRAVELS = [
	{_id:'1', users:[], countries:[COUNTRIES[4001]], departDate:'2008-12-12', returnDate: '2008-12-20', devises:[]},
	{_id:'2', users:[], countries:[COUNTRIES[1525]], departDate:'2006-12-12', returnDate: '2006-12-20', devises:[]},
	{_id:'3', users:[], countries:[COUNTRIES[1525]], departDate:'2007-12-12', returnDate: '2007-12-20', devises:[]},
	{_id:'4', users:[], countries:[COUNTRIES[1525], COUNTRIES[1664]], departDate:'2009-12-12', returnDate: '2009-12-20', devises:[]}
];