import axios from 'axios'
import { test } from '@/utils/utils.js'

test()

axios({
  method: 'get',
  url: 'https://www.baidu.com'
})