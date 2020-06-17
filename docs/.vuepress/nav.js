module.exports = [

    {
        text: '文章分享', link: '/wen/',
            items:[
                 { text: '成长',link: '/wen/cz/'},
                 { text: '诗词散文',link: '/wen/poetry/'},
            ]
        
    },
    {
        text: '学习大全', link: '/guide/',
            items:[
                 { text: 'vuepress搭建',link: '/guide/ss/'},
                 { text: 'java配置'  ,  link:  '/guide/java/'},
            ]
        
    },
    {
        text: '面试宝典', link: '/baodian/',
		items: [
            {text: '初级开发篇', link: '/baodian/zero/'},
            {text: '中高进阶篇', link: '/baodian/high/'},
        ]
    },
    {
        text: '工具箱',
        items: [
			{
                text: '在线编辑',
				items: [
					{text: '图片压缩', link: 'https://tinypng.com/'}
				]
            },
			{
                text: '在线服务',
				items: [
					{text: '阿里云', link: 'https://www.aliyun.com/'},
					{text: '腾讯云', link: 'https://cloud.tencent.com/'}
				]
            },
			{
                text: '博客指南',
				items: [
					{text: '掘金', link: 'https://juejin.im/'},
					{text: 'CSDN', link: 'https://blog.csdn.net/'}
				]
            }
        ]
    }
]