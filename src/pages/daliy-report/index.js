import './style/daliy-report.scss'
import axios from 'axios'
import { test } from '@/utils/utils'

test()

axios({
  method: 'get',
  url: 'https://www.baidu.com'
})