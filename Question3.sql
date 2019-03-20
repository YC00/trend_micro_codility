select country, coalesce(sum(t1.value),0) as export, coalesce(sum(t2.value),0) as import from companies left join trades as t1 on companies.name = t1.seller left join trades as t2 on companies.name = t2.buyer group by country order by country
