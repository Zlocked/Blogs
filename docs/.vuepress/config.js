const sidebar = require('./config/sidebar.js');
const head = require('./config/head.js');
const plugins = require('./config/plugins.js');
const nav = require('./config/nav.js');

// 配置文件
module.exports = {
	// 标签名
	title: 'Zlocked',
	// 网站描述
	description: 'Never give up, Never lose hope.',
	// 主题：vuepress-theme-reco
	theme: 'reco',
	// 移动端优化
	head: head,
	plugins: plugins,
	themeConfig: {
		type: 'blog',
		// 导航栏logo - 根目录为public
		logo: '/logo.jpg',
		// 右侧信息栏头像
		authorAvatar: '/logo.jpg',
		// 颜色主题初始化
		mode: 'dark', // 默认 auto，auto 跟随系统，dark 暗色模式，light 亮色模式
		modePicker: true, // 默认 true，false 不显示模式调节按钮，true 则显示
		// 导航栏按钮
		nav: nav,
		// 博客配置
		blogConfig: {
			// category: {
			// 	location: 2, // 在导航栏菜单中所占的位置，默认2
			// 	text: 'Blogs' // 默认文案 “分类”
			// },
			tag: {
				location: 3, // 在导航栏菜单中所占的位置，默认3
				text: 'Tag' // 默认文案 “标签”
			}
		},
		// 搜索设置
		search: true,
		searchMaxSuggestions: 5,
		// 最后更新时间
		lastUpdated: '更新时间',
		// 页面滚动
		smoothScroll: true,
		/** 代码主题设置
		 * support for
		 * 'default'
		 * 'funky'
		 * 'okaidia'
		 * 'solarizedlight'
		 * 'tomorrow'
		 */
		codeTheme: 'tomorrow', // default 'tomorrow'
		// 全局侧边栏
		// ...sidebar,
		subSidebar: 'auto' //在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容
	}
}