import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import_' + process.env.NODE_ENV)
// in development env not use Lazy Loading,because Lazy Loading too many pages will cause webpack hot update too slow.so only in production use Lazy Loading

Vue.use(Router)

/* layout */
import Layout from '../views/layout/Layout'

/**
* icon : the icon show in the sidebar
* hidden : if `hidden:true` will not show in the sidebar
* redirect : if `redirect:noredirect` will no redirct in the levelbar
* noDropdown : if `noDropdown:true` will has no submenu
* meta : { role: ['admin'] }  will control the page role
**/
export const constantRouterMap = [
    { path: '/login', component: _import('login/index'), hidden: true },
    { path: '/authredirect', component: _import('login/authredirect'), hidden: true },
    { path: '/404', component: _import('errorPage/404'), hidden: true },
    { path: '/401', component: _import('errorPage/401'), hidden: true },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: 'Home',
    hidden: true,
    children: [{ path: 'dashboard', component: _import('dashboard/index') }]
  },
  {
    path: '/introduction',
    component: Layout,
    redirect: '/introduction/index',
    icon: 'people',
    noDropdown: true,
    children: [{ path: 'index', component: _import('introduction/index'), name: 'Introduction' }]
  }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

export const asyncRouterMap = [
  {
    path: '/permission',
    component: Layout,
    redirect: '/permission/index',
    name: 'permission test',
    icon: 'lock',
    meta: { role: ['admin'] },
    noDropdown: true,
    children: [{ path: 'index', component: _import('permission/index'), name: 'Permission Test', meta: { role: ['admin'] }}]
  },
  {
    path: '/icon',
    component: Layout,
    icon: 'icon',
    noDropdown: true,
    children: [{ path: 'index', component: _import('svg-icons/index'), name: 'Icons' }]
  },
  {
    path: '/components',
    component: Layout,
    redirect: '/components/index',
    name: 'Components',
    icon: 'component',
    children: [
      { path: 'index', component: _import('components/index'), name: 'Brief Introduction' },
      { path: 'tinymce', component: _import('components/tinymce'), name: 'Rich Text Editor' },
      { path: 'markdown', component: _import('components/markdown'), name: 'Markdown Editor' },
      { path: 'jsoneditor', component: _import('components/jsonEditor'), name: 'JSON Editor' },
      { path: 'dndlist', component: _import('components/dndList'), name: 'List Dragger' },
      { path: 'splitpane', component: _import('components/splitpane'), name: 'SplitPane' },
      { path: 'avatarupload', component: _import('components/avatarUpload'), name: 'Avatar Upload' },
      { path: 'dropzone', component: _import('components/dropzone'), name: 'Dropzone' },
      { path: 'sticky', component: _import('components/sticky'), name: 'Sticky' },
      { path: 'countto', component: _import('components/countTo'), name: 'CountTo' },
      { path: 'mixin', component: _import('components/mixin'), name: 'Widgets' },
      { path: 'backtotop', component: _import('components/backToTop'), name: 'Top' }
    ]
  },
  {
    path: '/charts',
    component: Layout,
    redirect: '/charts/index',
    name: 'Charts',
    icon: 'chart',
    children: [
      { path: 'index', component: _import('charts/index'), name: 'Brief Introduction' },
      { path: 'keyboard', component: _import('charts/keyboard'), name: 'Keyboard' },
      { path: 'keyboard2', component: _import('charts/keyboard2'), name: 'Keyboard 2' },
      { path: 'line', component: _import('charts/line'), name: 'Line' },
      { path: 'mixchart', component: _import('charts/mixChart'), name: 'Mixed' }
    ]
  },
  {
    path: '/example',
    component: Layout,
    redirect: 'noredirect',
    name: 'Examples',
    icon: 'example',
    children: [
      {
        path: '/example/table',
        component: _import('example/table/index'),
        redirect: '/example/table/table',
        name: 'Table',
        icon: 'table',
        children: [
          { path: 'dynamictable', component: _import('example/table/dynamictable/index'), name: '动态table' },
          { path: 'dragtable', component: _import('example/table/dragTable'), name: '拖拽table' },
          { path: 'inline_edit_table', component: _import('example/table/inlineEditTable'), name: 'table内编辑' },
          { path: 'table', component: _import('example/table/table'), name: '综合table' }
        ]
      },
      { path: 'form/edit', icon: 'form', component: _import('example/form'), name: '编辑Form', meta: { isEdit: true }},
      { path: 'form/create', icon: 'form', component: _import('example/form'), name: '创建Form' },
      { path: 'tab/index', icon: 'tab', component: _import('example/tab/index'), name: 'Tab' }
    ]
  },
  {
    path: '/error',
    component: Layout,
    redirect: 'noredirect',
    name: '错误页面',
    icon: '404',
    children: [
      { path: '401', component: _import('errorPage/401'), name: '401' },
      { path: '404', component: _import('errorPage/404'), name: '404' }
    ]
  },
  {
    path: '/errlog',
    component: Layout,
    redirect: 'noredirect',
    name: 'errlog',
    icon: 'bug',
    noDropdown: true,
    children: [{ path: 'log', component: _import('errlog/index'), name: '错误日志' }]
  },
  {
    path: '/excel',
    component: Layout,
    redirect: '/excel/download',
    name: 'excel',
    icon: 'excel',
    children: [
      { path: 'download', component: _import('excel/index'), name: 'export excel' },
      { path: 'download2', component: _import('excel/selectExcel'), name: 'export selected' },
      { path: 'upload', component: _import('excel/uploadExcel'), name: 'upload excel' }
    ]
  },
  {
    path: '/zip',
    component: Layout,
    redirect: '/zip/download',
    name: 'zip',
    icon: 'zip',
    children: [
      { path: 'download', component: _import('zip/index'), name: 'export zip' }
    ]
  },
  {
    path: '/theme',
    component: Layout,
    redirect: 'noredirect',
    name: 'theme',
    icon: 'theme',
    noDropdown: true,
    children: [{ path: 'index', component: _import('theme/index'), name: '换肤' }]
  },
  {
    path: '/clipboard',
    component: Layout,
    redirect: 'noredirect',
    icon: 'clipboard',
    noDropdown: true,
    children: [{ path: 'index', component: _import('clipboard/index'), name: 'clipboard' }]
  },

  { path: '*', redirect: '/404', hidden: true }
]
