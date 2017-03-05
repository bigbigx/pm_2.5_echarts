



const chart = echarts.init(document.querySelector('#main'))
        chart.setOption({
            series: [{
                type: 'map',
                map: 'china'
        }]
})
