import express from "express"
import cors from "cors"
const app = express()
app.listen(9999)
app.use(cors())

const DB = [
  {a: 'No.000', b: '타자가', c: 0, d: false}
, {a: 'No.001', b: '사나바', c: 10, d: true}
, {a: 'No.002', b: '마나자', c: 20, d: false}
, {a: 'No.003', b: '마차아', c: 30, d: true}
, {a: 'No.004', b: '라사가', c: 40, d: false}
, {a: 'No.005', b: '하바아', c: 50, d: true}
, {a: 'No.006', b: '라하사', c: 60, d: false}
, {a: 'No.007', b: '나차마', c: 70, d: true}
, {a: 'No.008', b: '차아가', c: 80, d: false}
, {a: 'No.009', b: '가아마', c: 90, d: true}
, {a: 'No.010', b: '바다가', c: 100, d: false}
, {a: 'No.011', b: '나다라', c: 110, d: true}
, {a: 'No.012', b: '카하바', c: 120, d: false}
, {a: 'No.013', b: '사하나', c: 130, d: true}
, {a: 'No.014', b: '마바가', c: 140, d: false}
, {a: 'No.015', b: '마나마', c: 150, d: true}
, {a: 'No.016', b: '하파아', c: 160, d: false}
, {a: 'No.017', b: '다카차', c: 170, d: true}
, {a: 'No.018', b: '다카다', c: 180, d: false}
, {a: 'No.019', b: '사파사', c: 190, d: true}
, {a: 'No.020', b: '하사바', c: 200, d: false}
, {a: 'No.021', b: '파파아', c: 210, d: true}
, {a: 'No.022', b: '타하마', c: 220, d: false}
, {a: 'No.023', b: '차사타', c: 230, d: true}
, {a: 'No.024', b: '파사나', c: 240, d: false}
, {a: 'No.025', b: '나아아', c: 250, d: true}
, {a: 'No.026', b: '나다가', c: 260, d: false}
, {a: 'No.027', b: '사나다', c: 270, d: true}
, {a: 'No.028', b: '아마라', c: 280, d: false}
, {a: 'No.029', b: '차바하', c: 290, d: true}
, {a: 'No.030', b: '바라가', c: 300, d: false}
, {a: 'No.031', b: '하하아', c: 310, d: true}
, {a: 'No.032', b: '나라아', c: 320, d: false}
, {a: 'No.033', b: '하카자', c: 330, d: true}
, {a: 'No.034', b: '카라자', c: 340, d: false}
, {a: 'No.035', b: '가아가', c: 350, d: true}
, {a: 'No.036', b: '다타타', c: 360, d: false}
, {a: 'No.037', b: '라사하', c: 370, d: true}
, {a: 'No.038', b: '바차바', c: 380, d: false}
, {a: 'No.039', b: '마자나', c: 390, d: true}
, {a: 'No.040', b: '라다마', c: 400, d: false}
, {a: 'No.041', b: '타카마', c: 410, d: true}
, {a: 'No.042', b: '타차파', c: 420, d: false}
, {a: 'No.043', b: '바마차', c: 430, d: true}
, {a: 'No.044', b: '나타파', c: 440, d: false}
, {a: 'No.045', b: '사차다', c: 450, d: true}
, {a: 'No.046', b: '차가자', c: 460, d: false}
, {a: 'No.047', b: '파파아', c: 470, d: true}
, {a: 'No.048', b: '파라파', c: 480, d: false}
, {a: 'No.049', b: '가자다', c: 490, d: true}
, {a: 'No.050', b: '아자아', c: 500, d: false}
, {a: 'No.051', b: '바마바', c: 510, d: true}
, {a: 'No.052', b: '바파아', c: 520, d: false}
, {a: 'No.053', b: '다타마', c: 530, d: true}
, {a: 'No.054', b: '하가차', c: 540, d: false}
, {a: 'No.055', b: '다바다', c: 550, d: true}
, {a: 'No.056', b: '파타차', c: 560, d: false}
, {a: 'No.057', b: '가다파', c: 570, d: true}
, {a: 'No.058', b: '자라나', c: 580, d: false}
, {a: 'No.059', b: '사마사', c: 590, d: true}
, {a: 'No.060', b: '가카다', c: 600, d: false}
, {a: 'No.061', b: '파라가', c: 610, d: true}
, {a: 'No.062', b: '타나자', c: 620, d: false}
, {a: 'No.063', b: '라자사', c: 630, d: true}
, {a: 'No.064', b: '다사하', c: 640, d: false}
, {a: 'No.065', b: '바파나', c: 650, d: true}
, {a: 'No.066', b: '아사나', c: 660, d: false}
, {a: 'No.067', b: '카카차', c: 670, d: true}
, {a: 'No.068', b: '파파사', c: 680, d: false}
, {a: 'No.069', b: '차라차', c: 690, d: true}
, {a: 'No.070', b: '나아마', c: 700, d: false}
, {a: 'No.071', b: '가다다', c: 710, d: true}
, {a: 'No.072', b: '라다아', c: 720, d: false}
, {a: 'No.073', b: '아아하', c: 730, d: true}
, {a: 'No.074', b: '라하마', c: 740, d: false}
, {a: 'No.075', b: '가라차', c: 750, d: true}
, {a: 'No.076', b: '사파다', c: 760, d: false}
, {a: 'No.077', b: '자파가', c: 770, d: true}
, {a: 'No.078', b: '나다타', c: 780, d: false}
, {a: 'No.079', b: '카다아', c: 790, d: true}
, {a: 'No.080', b: '타카가', c: 800, d: false}
, {a: 'No.081', b: '타다카', c: 810, d: true}
, {a: 'No.082', b: '차차마', c: 820, d: false}
, {a: 'No.083', b: '자차나', c: 830, d: true}
, {a: 'No.084', b: '바자자', c: 840, d: false}
, {a: 'No.085', b: '파아나', c: 850, d: true}
, {a: 'No.086', b: '아가사', c: 860, d: false}
, {a: 'No.087', b: '바사차', c: 870, d: true}
, {a: 'No.088', b: '나사차', c: 880, d: false}
, {a: 'No.089', b: '가차나', c: 890, d: true}
, {a: 'No.090', b: '아파파', c: 900, d: false}
, {a: 'No.091', b: '하가자', c: 910, d: true}
, {a: 'No.092', b: '아차나', c: 920, d: false}
, {a: 'No.093', b: '하마가', c: 930, d: true}
, {a: 'No.094', b: '마다자', c: 940, d: false}
, {a: 'No.095', b: '파라차', c: 950, d: true}
, {a: 'No.096', b: '파사파', c: 960, d: false}
, {a: 'No.097', b: '하가나', c: 970, d: true}
, {a: 'No.098', b: '바자타', c: 980, d: false}
, {a: 'No.099', b: '차바하', c: 990, d: true}
, {a: 'No.100', b: '나파카', c: 1000, d: false}
, {a: 'No.101', b: '가카자', c: 1010, d: true}
, {a: 'No.102', b: '아사다', c: 1020, d: false}
, {a: 'No.103', b: '자가자', c: 1030, d: true}
, {a: 'No.104', b: '파마가', c: 1040, d: false}
, {a: 'No.105', b: '카타다', c: 1050, d: true}
, {a: 'No.106', b: '하마다', c: 1060, d: false}
, {a: 'No.107', b: '사마타', c: 1070, d: true}
, {a: 'No.108', b: '나타바', c: 1080, d: false}
, {a: 'No.109', b: '나마아', c: 1090, d: true}
, {a: 'No.110', b: '하라차', c: 1100, d: false}
, {a: 'No.111', b: '사카타', c: 1110, d: true}
, {a: 'No.112', b: '차바다', c: 1120, d: false}
, {a: 'No.113', b: '사하사', c: 1130, d: true}
, {a: 'No.114', b: '카마차', c: 1140, d: false}
, {a: 'No.115', b: '파다라', c: 1150, d: true}
, {a: 'No.116', b: '마다차', c: 1160, d: false}
, {a: 'No.117', b: '파마타', c: 1170, d: true}
, {a: 'No.118', b: '마사하', c: 1180, d: false}
, {a: 'No.119', b: '마파마', c: 1190, d: true}
, {a: 'No.120', b: '다라자', c: 1200, d: false}
, {a: 'No.121', b: '가라나', c: 1210, d: true}
, {a: 'No.122', b: '가라파', c: 1220, d: false}
]

const getList = (nowIndex = 0, numberPerPage = 20, searchField, search, sortField, sort) => {
    const filterData = DB.filter(item => {
        if(!search) return true
        if(searchField) {
            if(String(item[searchField]).includes(search)) return true
            return false
        } else {
            for(const key in item) if(String(item[key]).includes(search)) return true
            return false
        }
    })

    const setSort = (data) => {
        if(!sortField) return data
        const key = sortField
        return data.sort((a, b) => {
            if(typeof a[key] == "number") {
                return sort == "ASC" 
                ? a[key] - b[key]
                : (sort == "DESC" ? b[key] - a[key] : null)
            } else {
                return sort == "ASC"  
                ? String(a[key]).localeCompare( String(b[key]) ) 
                : (sort == "DESC" ? String(b[key]).localeCompare( String(a[key]) ) : null)
            }
        })
    }
    
    const sortData = setSort(filterData)
    const sliceData = sortData.slice(nowIndex * numberPerPage, nowIndex * numberPerPage + numberPerPage)

    return {
        allDataLength: search ? filterData.length : DB.length,
        data: sliceData
    }
}

app.get('/', (req, res) => {
    const params = req.query
    res.send({
        ...getList(params.index * 1, params.numberPerPage * 1, params.searchField, params.search, params.sortField, params.sort), 
        params: params
    })
})