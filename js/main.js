$(function () {
    $('#campaignGraph').highcharts({
        title: {
            text: 'Campaigns Created',
            x: -20 //center
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        yAxis: {
            title: {
                text: 'Campaigns'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: '2014',
            data: [304,140,682,1108,1092,1141,1671,666,952,251,289,403]
        },
        {
            name: '2015',
            data: [658,208,245,491,409,190,262,433,218,288,271,492]
        }]
    });
        $('#couponGraph').highcharts({
        title: {
            text: 'Coupons Redeemed',
            x: -20 //center
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        yAxis: {
            title: {
                text: 'Bookings'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: '2014',
            data: [10055,10496,13898,17058,20427,20881,22181,26875,24504,28816,36050,29090]
        },
        {
            name: '2015',
            data: [68313,69204,99981,84239,91428,95911,108102,107603,86212,79538,75641,72206]
        },
        {
            name: '2016',
            data: [103545,136212,164333,149752,126499]
        }]
    });
});