module.exports = {
  // 基础配置
  base: '/Web-Webpack/', // 部署站点的基础路径
  description: 'webpack相关知识点',
  plugins: {
    // 名称：@vuepress/plugin-pwa 网页内容有更新的时候有刷新按钮。可以把网页保存到桌面，当一个app一样
    '@vuepress/pwa': {
      serviceWorker: true,
      updatePopup: {
        message: "有新的内容更新",
        buttonText: "刷新"
      }
    },
    // 名称：@vuepress/plugin-back-to-top 效果：文章看到下面的时候，点击一个图标会回到顶部
    '@vuepress/back-to-top': true,
    // 名称：@vuepress/plugin-active-header-links 效果：页面滚动时自动激活侧边栏链接的插件，效果就是右边内容滚动的时候，看到哪里了，左侧菜单会自动高亮显示当前看的目录。
    '@vuepress/active-header-links': {
      sidebarLinkSelector: '.sidebar-link',
      headerAnchorSelector: '.header-anchor'
    },
    "@vssue/vuepress-plugin-vssue": {
      platform: 'github', //v3的platform是github，v4的是github-v4
      locale: 'zh', //语言
      // 其他的 Vssue 配置
      owner: 'zhoubichuan', //github账户名
      repo: 'Web-Vue', //github一个项目的名称
      clientId: 'Iv1.2923ba5d4de48a3c', //注册的Client ID
      clientSecret: '110210', //注册的Client Secret
      autoCreateIssue: true // 自动创建评论，默认是false，最好开启，这样首次进入页面的时候就不用去点击创建评论的按钮了。
    },
    "vuepress-plugin-boxx": ["vuepress-plugin-boxx"]
  },
  locales: {
    // 默认标题
    '/': {
      title: 'webpack笔记',
      description: ''
    }
  },
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  head: [
    // 添加链接 pwa 的 manifest 如果需要
    [
      'link',
      {
        rel: 'icon',
        href: ''
      }
    ],
    [
      'meta',
      {
        name: 'apple-mobile-web-app-capable',
        content: 'yes'
      }
    ],
    [
      'meta',
      {
        name: 'apple-mobile-web-app-status-bar-style',
        content: 'black'
      }
    ],
    [
      'meta',
      {
        name: 'msapplication-TileColor',
        content: '#000000'
      }
    ]
  ],
  port: 3009,
  dest: 'dist', // 指定 vuepress build 的输出目录
  serviceWorker: true, // pwa

  // 主题配置
  themeConfig: {
    editLinks: true,
    docsDir: 'src', // 假如文档不是放在仓库的根目录下
    locales: {
      '/': {
        docsBranch: 'master', // 假如文档放在一个特定的分支下
        editLinks: true, // 启用编辑
        editLinkText: '在github上编辑此页',
        lastUpdated: '上次更新', // 获取每个文件最后一次 git 提交的时间戳
        nav: [{
          text: '基础知识',
          items: [{
            text: '一.基础功能',
            link: '/base/use/1.introduction'
          },
          {
            text: '二.配置开发服务器',
            link: '/base/devserver/skill',
          },
          {
            text: '三.配置plugin',
            link: '/base/plugin/skill',
          },
          {
            text: '四.配置loader',
            link: '/base/loader/skill',
          }
          ]
        },
        {
          text: '高级知识',
          items: [{
            text: '1.loader的实现',
            link: '/senior/loader/1.recursionAndDynamics'
          },
          {
            text: '2.plugin的实现',
            link: '/senior/plugin/1.recursionAndDynamics'
          },
          ]
        },
        {
          text: '源码知识',
          items: [{
            text: '一.webpack源码解析',
            link: '/source/webpack/inde'
          },
          {
            text: '二.loader源码解析',
            link: '/source/loader/Pagination'
          },
          ]
        }
        ],
        sidebar: {
          '/base/use/': [
            '1.introduction', 
            '2.route', 
            '3.devenv', 
            '4.devserver', 
            '5.envconfig', 
            '6.loaderconfig', 
            '7.pluginconfig', 
            '8.workflow', 
            '9.constructionspeed', 
            '10.devspeed', 
            '11.optimization'
          ],
          '/base/devserver/': [
            'skill', 
            'bug', 
            'webpack', 
            'vscode', 
            'test', 
            'prem', 
            'i18n'
          ],
          '/base/plugin/': [
            'skill', 
            'bug', 
            'webpack', 
            'vscode', 
            'test', 
            'prem', 
            'i18n'
          ],
          '/base/loader/': [
            'skill', 
            'bug', 
            'webpack', 
            'vscode', 
            'test', 
            'prem', 
            'i18n'
          ],
          '/senior/use/': [
            '1.recursionAndDynamics', 
            '2.extend', 
            '3.componentCommunication', 
            '4.render', 
            '5.api', 
            '6.form', 
            '7.checkBox', 
            '8.active', 
            '9.alert', 
            '10.table', 
            '11.tree'
          ],
          '/senior/npm/': [
            '1.recursionAndDynamics'
          ],
          '/source/webpack/': [
            'inde',
            '1.file',
            '2.tapable',
            '3.ast',
            '4.source',
            '5.loader',
            '6.plugin',
            '7.hand',
            '8.prepare'
          ],
          '/source/loader/': [
            'Pagination',
            'Dialog',
            'Autocomplete',
            'Dropdown',
            'DropdownMenu',
            'DropdownItem',
            'Menu',
            'Submenu',
            'MenuItem',
            'MenuItemGroup',
            'Input',
            'InputNumber',
            'Radio',
            'RadioGroup',
            'RadioButton',
            'Checkbox',
            'CheckboxButton',
            'CheckboxGroup',
            'Switch',
            'Option',
            'OptionGroup',
            'Button',
            'ButtonGroup',
            'Table',
            'TableColumn',
            'DatePicker',
            'TimeSelect',
            'TimePicker',
            'Popover',
            'Tooltip',
            'Breadcrumb',
            'BreadcrumbItem',
            'Form',
            'FormItem',
            'Tabs',
            'TabPane',
            'Tag',
            'Tree',
            'Alert',
            'Slider',
            'Icon',
            'Row',
            'Col',
            'Upload',
            'Progress',
            'Spinner',
            'Badge',
            'Card',
            'Rate',
            'Steps',
            'Step',
            'Carousel',
            'Scrollbar',
            'CarouselItem',
            'Collapse',
            'CollapseItem',
            'Cascader',
            'ColorPicker',
            'Transfer',
            'Container',
            'Header',
            'Aside',
            'Main',
            'Footer',
            'Timeline',
            'TimelineItem',
            'Link',
            'Divider',
            'Image',
            'Calendar',
            'Backtop',
            'PageHeader',
            'CascaderPanel',
            'Avatar',
            'Drawer',
            'Popconfirm',
            'CollapseTransition',
            'MessageBox'
          ],
        }
      }
    }
  },
}