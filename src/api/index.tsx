import axios from '@/utils/axios'

/**
 * ------------------------------------------------------------
 * ----------------------- 配置管理 ----------------------------
 * ------------------------------------------------------------
 */

/** 获取配置管理列表 */
export const getSystemConfig = (params: AnyKeyProps) => axios.post('/sysConfigure/listByPage', params)

/** 添加配置管理 */
export const addSystemConfig = (params: AnyKeyProps) => axios.post('/sysConfigure/create', params)

/** 添加配置管理 */
export const updateSystemConfig = (params: AnyKeyProps) => axios.post('/sysConfigure/update', params)

/** 删除配置管理 */
export const deleteSystemConfig = (params: AnyKeyProps) => axios.delete('/sysConfigure/deleteAll', params)
