# crrc.elec-distributor.com 内部链接优化策略

**审计日期**: 2026-04-08  
**网站URL**: https://crrc.elec-distributor.com/  
**策略类型**: 内部链接架构优化  

---

## 执行摘要

### 当前状态评估

| 指标 | 当前状态 | 目标 | 优先级 |
|------|----------|------|--------|
| 首页出站链接 | ~0 | 15-20 | 🔴 高 |
| 内部链接深度 | N/A | 3层以内 | 🔴 高 |
| 锚文本多样性 | N/A | 80%+ 描述性 | 🟡 中 |
| 孤立页面 | N/A | 0 | 🔴 高 |
| 链接分布 | N/A | 均匀分布 | 🟡 中 |

### 核心问题

1. **❌ 首页几乎无内部链接** - 权重无法传递
2. **❌ 缺少产品页面链接** - 产品无法被发现
3. **❌ 缺少应用页面链接** - 解决方案无法被索引
4. **❌ 缺少资源页面链接** - 技术文档无法访问

---

## 1. 内部链接架构设计

### 1.1 网站信息架构

```
                    [首页]
                      |
        +-------------+-------------+-------------+
        |             |             |             |
   [产品中心]    [应用方案]    [服务支持]    [关于我们]
        |             |             |             |
    +---+---+     +---+---+     +---+---+     +---+---+
    |   |   |     |   |   |     |   |   |     |   |   |
  IGBT SiC FRD  Rail  EV Grid  库存 交付 FAE  公司 授权 联系
```

### 1.2 链接权重分配策略

| 页面类型 | 权重分配 | 链接策略 |
|----------|----------|----------|
| 首页 | 100% | 向所有重要页面传递权重 |
| 产品类别页 | 25% | 向具体产品页传递 |
| 产品详情页 | 10% | 向相关产品、应用案例传递 |
| 应用方案页 | 20% | 向相关产品、服务传递 |
| 服务支持页 | 15% | 向联系页面传递 |
| 关于我们页 | 10% | 向授权证书、联系方式传递 |

---

## 2. 首页内部链接方案

### 2.1 必须添加的链接（15-20个）

#### 产品区域链接（4个）

```html
<!-- Core Product Areas 区域 -->
<section id="products">
  <h2>Core Product Areas</h2>
  
  <div class="product-card">
    <h3><a href="/products/igbt-modules/">IGBT Modules</a></h3>
    <p>High-reliability IGBTs for rail, grid, and industrial high-power applications.</p>
    <a href="/products/igbt-modules/" class="learn-more">Explore IGBT Modules →</a>
  </div>
  
  <div class="product-card">
    <h3><a href="/products/sic-devices/">SiC Devices</a></h3>
    <p>Cutting-edge SiC MOSFETs and Diodes for high-efficiency systems like EVs.</p>
    <a href="/products/sic-devices/" class="learn-more">Explore SiC Devices →</a>
  </div>
  
  <div class="product-card">
    <h3><a href="/products/frd-modules/">FRD Modules</a></h3>
    <p>Fast Recovery Diodes with excellent performance for high-frequency circuits.</p>
    <a href="/products/frd-modules/" class="learn-more">Explore FRD Modules →</a>
  </div>
  
  <div class="product-card">
    <h3><a href="/products/thyristors/">Thyristors & IGCTs</a></h3>
    <p>Robust solutions for ultra-high power phase control and inverter applications.</p>
    <a href="/products/thyristors/" class="learn-more">Explore Thyristors →</a>
  </div>
</section>
```

#### 应用方案链接（4个）

```html
<!-- Solutions & Applications 区域 -->
<section id="applications">
  <h2>Solutions & Applications</h2>
  
  <div class="solution-card">
    <h3><a href="/applications/rail-transit/">Rail Transit</a></h3>
    <p>Powering traction inverters and auxiliary converters with robust modules.</p>
    <a href="/applications/rail-transit/">View Rail Solutions →</a>
  </div>
  
  <div class="solution-card">
    <h3><a href="/applications/ev/">New Energy Vehicles</a></h3>
    <p>High-efficiency SiC solutions for main inverters, OBC, and DC-DC converters.</p>
    <a href="/applications/ev/">View EV Solutions →</a>
  </div>
  
  <div class="solution-card">
    <h3><a href="/applications/smart-grid/">Smart Grid</a></h3>
    <p>High-voltage IGBTs for VSC-HVDC, STATCOM, and grid stabilization systems.</p>
    <a href="/applications/smart-grid/">View Grid Solutions →</a>
  </div>
  
  <div class="solution-card">
    <h3><a href="/applications/industrial/">Industrial & Storage</a></h3>
    <p>Reliable devices for high-power drives, PV inverters, and energy storage systems.</p>
    <a href="/applications/industrial/">View Industrial Solutions →</a>
  </div>
</section>
```

#### 服务支持链接（3个）

```html
<!-- Why Choose LiTong 区域增强 -->
<section id="why-us">
  <h2>Why Choose LiTong?</h2>
  
  <div class="feature">
    <h3><a href="/services/authorization/">Core & Original</a></h3>
    <p>Official distributor status ensures 100% original, traceable products. 
    <a href="/services/authorization/">View Authorization Certificate →</a></p>
  </div>
  
  <div class="feature">
    <h3><a href="/services/inventory/">Large Inventory</a></h3>
    <p>Extensive stock of popular models for rapid delivery and project needs. 
    <a href="/services/inventory/">Check Stock Availability →</a></p>
  </div>
  
  <div class="feature">
    <h3><a href="/services/fae-support/">Expert FAE Support</a></h3>
    <p>Our Field Application Engineers help you select and implement the best parts. 
    <a href="/services/fae-support/">Meet Our FAE Team →</a></p>
  </div>
</section>
```

#### 资源下载链接（2个）

```html
<!-- 添加资源区域 -->
<section id="resources">
  <h2>Technical Resources</h2>
  <ul>
    <li><a href="/resources/datasheets/">Download Product Datasheets</a></li>
    <li><a href="/resources/application-notes/">Application Notes & Guides</a></li>
  </ul>
</section>
```

#### 关于与联系链接（2个）

```html
<!-- 页脚或关于区域 -->
<nav class="footer-nav">
  <a href="/about/company/">About LiTong</a>
  <a href="/about/authorization/">CRRC Authorization</a>
  <a href="/contact/">Contact Us</a>
  <a href="/quote/">Request Quote</a>
</nav>
```

### 2.2 锚文本优化策略

| 目标页面 | 推荐锚文本（多样化） | 避免使用 |
|----------|---------------------|----------|
| IGBT 产品页 | "IGBT Modules", "CRRC IGBT", "IGBT Power Modules" | "click here", "read more" |
| SiC 产品页 | "SiC Devices", "SiC MOSFETs", "Silicon Carbide" | "link", "here" |
| 应用方案 | "Rail Transit Solutions", "EV Applications" | "this page" |
| 服务页面 | "FAE Support", "Stock Availability" | "more info" |
| 联系页面 | "Contact Our Team", "Request Quote" | "contact us"（过于通用） |

---

## 3. 产品页面内部链接方案

### 3.1 IGBT 产品页链接架构

```html
<!-- IGBT 产品详情页 -->
<article>
  <h1>CRRC IGBT Modules</h1>
  
  <!-- 面包屑 -->
  <nav class="breadcrumb">
    <a href="/">Home</a> → 
    <a href="/products/">Products</a> → 
    <span>IGBT Modules</span>
  </nav>
  
  <!-- 产品描述 -->
  <section>
    <h2>High-Reliability IGBT Modules</h2>
    <p>CRRC IGBT modules are designed for demanding applications in 
    <a href="/applications/rail-transit/">rail transit</a>, 
    <a href="/applications/smart-grid/">smart grid</a>, and 
    <a href="/applications/industrial/">industrial drives</a>.</p>
  </section>
  
  <!-- 相关产品 -->
  <section class="related-products">
    <h2>Related Products</h2>
    <ul>
      <li><a href="/products/sic-devices/">SiC MOSFETs</a> - For higher efficiency applications</li>
      <li><a href="/products/frd-modules/">Fast Recovery Diodes</a> - Complementary devices</li>
      <li><a href="/products/thyristors/">Thyristors</a> - For phase control applications</li>
    </ul>
  </section>
  
  <!-- 技术资源 -->
  <section class="resources">
    <h2>Technical Resources</h2>
    <ul>
      <li><a href="/resources/datasheets/igbt/">IGBT Datasheets</a></li>
      <li><a href="/resources/application-notes/igbt-selection/">IGBT Selection Guide</a></li>
    </ul>
  </section>
  
  <!-- CTA -->
  <section class="cta">
    <h2>Get IGBT Quote</h2>
    <p>Need help selecting the right IGBT module? 
    <a href="/services/fae-support/">Our FAE team</a> is ready to assist.</p>
    <a href="/quote/?product=igbt" class="button">Request Quote</a>
  </section>
</article>
```

### 3.2 产品页链接数量建议

| 页面类型 | 出站链接数 | 内部链接占比 | 链接深度 |
|----------|------------|--------------|----------|
| 产品类别页 | 10-15 | 90% | 2层 |
| 产品详情页 | 8-12 | 85% | 3层 |
| 应用方案页 | 10-15 | 80% | 2层 |
| 资源页面 | 6-10 | 95% | 2层 |

---

## 4. 导航菜单链接方案

### 4.1 主导航菜单

```html
<nav class="main-nav">
  <ul>
    <li><a href="/">Home</a></li>
    
    <li class="dropdown">
      <a href="/products/">Products</a>
      <ul class="dropdown-menu">
        <li><a href="/products/igbt-modules/">IGBT Modules</a></li>
        <li><a href="/products/sic-devices/">SiC Devices</a></li>
        <li><a href="/products/frd-modules/">FRD Modules</a></li>
        <li><a href="/products/thyristors/">Thyristors & IGCTs</a></li>
      </ul>
    </li>
    
    <li class="dropdown">
      <a href="/applications/">Applications</a>
      <ul class="dropdown-menu">
        <li><a href="/applications/rail-transit/">Rail Transit</a></li>
        <li><a href="/applications/ev/">New Energy Vehicles</a></li>
        <li><a href="/applications/smart-grid/">Smart Grid</a></li>
        <li><a href="/applications/industrial/">Industrial & Storage</a></li>
      </ul>
    </li>
    
    <li class="dropdown">
      <a href="/services/">Services</a>
      <ul class="dropdown-menu">
        <li><a href="/services/inventory/">Inventory & Stock</a></li>
        <li><a href="/services/fae-support/">FAE Support</a></li>
        <li><a href="/services/delivery/">Fast Delivery</a></li>
      </ul>
    </li>
    
    <li class="dropdown">
      <a href="/resources/">Resources</a>
      <ul class="dropdown-menu">
        <li><a href="/resources/datasheets/">Datasheets</a></li>
        <li><a href="/resources/application-notes/">Application Notes</a></li>
        <li><a href="/resources/videos/">Video Tutorials</a></li>
      </ul>
    </li>
    
    <li><a href="/about/">About</a></li>
    <li><a href="/contact/">Contact</a></li>
    <li><a href="/quote/" class="cta-button">Get Quote</a></li>
  </ul>
</nav>
```

### 4.2 页脚链接

```html
<footer>
  <div class="footer-columns">
    <div class="column">
      <h4>Products</h4>
      <ul>
        <li><a href="/products/igbt-modules/">IGBT Modules</a></li>
        <li><a href="/products/sic-devices/">SiC Devices</a></li>
        <li><a href="/products/frd-modules/">FRD Modules</a></li>
        <li><a href="/products/thyristors/">Thyristors</a></li>
      </ul>
    </div>
    
    <div class="column">
      <h4>Applications</h4>
      <ul>
        <li><a href="/applications/rail-transit/">Rail Transit</a></li>
        <li><a href="/applications/ev/">New Energy Vehicles</a></li>
        <li><a href="/applications/smart-grid/">Smart Grid</a></li>
        <li><a href="/applications/industrial/">Industrial</a></li>
      </ul>
    </div>
    
    <div class="column">
      <h4>Support</h4>
      <ul>
        <li><a href="/services/fae-support/">FAE Support</a></li>
        <li><a href="/resources/datasheets/">Datasheets</a></li>
        <li><a href="/contact/">Contact Us</a></li>
        <li><a href="/quote/">Request Quote</a></li>
      </ul>
    </div>
    
    <div class="column">
      <h4>Company</h4>
      <ul>
        <li><a href="/about/company/">About LiTong</a></li>
        <li><a href="/about/authorization/">CRRC Authorization</a></li>
        <li><a href="/about/news/">News & Updates</a></li>
        <li><a href="/about/careers/">Careers</a></li>
      </ul>
    </div>
  </div>
</footer>
```

---

## 5. 上下文链接策略

### 5.1 内容内链接

在正文内容中自然地添加上下文链接：

```html
<!-- 示例：IGBT 介绍段落 -->
<p>Our <a href="/products/igbt-modules/">CRRC IGBT modules</a> are widely used in 
<a href="/applications/rail-transit/">rail transit systems</a> for traction inverters. 
Compared to traditional IGBTs, our <a href="/products/sic-devices/">SiC devices</a> 
offer higher efficiency for <a href="/applications/ev/">electric vehicle</a> applications.</p>
```

### 5.2 相关文章/产品推荐

```html
<!-- 相关产品推荐组件 -->
<aside class="related-content">
  <h3>You May Also Need</h3>
  <ul>
    <li>
      <a href="/products/sic-devices/">
        <img src="/images/sic-thumb.jpg" alt="SiC Devices">
        <span>SiC MOSFETs for EV Applications</span>
      </a>
    </li>
    <li>
      <a href="/resources/application-notes/igbt-selection/">
        <span>How to Select the Right IGBT Module</span>
      </a>
    </li>
  </ul>
</aside>
```

---

## 6. GEO 本地化内部链接

### 6.1 国家页面链接架构

```html
<!-- 首页国家选择器 -->
<section class="global-presence">
  <h2>Global Presence</h2>
  <p>Local support and fast delivery worldwide</p>
  
  <div class="country-links">
    <h3>Americas</h3>
    <a href="/usa/">United States</a>
    <a href="/mx/">Mexico</a>
    
    <h3>Europe</h3>
    <a href="/de/">Germany</a>
    <a href="/fr/">France</a>
    <a href="/it/">Italy</a>
    <a href="/pl/">Poland</a>
    
    <h3>Asia Pacific</h3>
    <a href="/in/">India</a>
    <a href="/vn/">Vietnam</a>
    <a href="/jp/">Japan</a>
    <a href="/kr/">Korea</a>
    <a href="/my/">Malaysia</a>
    
    <h3>Others</h3>
    <a href="/tr/">Turkey</a>
  </div>
</section>
```

### 6.2 国家页面内部链接

```html
<!-- 美国页面示例 -->
<article>
  <h1>CRRC Distributor in USA</h1>
  
  <section>
    <h2>Products Available in USA</h2>
    <ul>
      <li><a href="/usa/products/igbt-modules/">IGBT Modules - USA Stock</a></li>
      <li><a href="/usa/products/sic-devices/">SiC Devices - USA Stock</a></li>
    </ul>
  </section>
  
  <section>
    <h2>USA Services</h2>
    <ul>
      <li><a href="/usa/services/delivery/">Fast Delivery in USA</a></li>
      <li><a href="/usa/services/fae-support/">Local FAE Support</a></li>
    </ul>
  </section>
  
  <section>
    <h2>Other Regions</h2>
    <p>Looking for other regions? Visit our 
    <a href="/de/">Germany</a>, 
    <a href="/in/">India</a>, or 
    <a href="/">Global</a> site.</p>
  </section>
</article>
```

---

## 7. 链接优化检查清单

### 7.1 实施前检查

- [ ] 所有目标页面已创建
- [ ] URL 结构已确定
- [ ] 锚文本策略已制定
- [ ] 导航菜单设计已完成

### 7.2 实施中检查

- [ ] 每个页面至少有 3-5 个内部链接
- [ ] 锚文本多样化，避免过度优化
- [ ] 所有链接可点击，无断链
- [ ] 链接与内容相关

### 7.3 实施后检查

- [ ] 使用 Screaming Frog 检查断链
- [ ] 验证链接深度不超过 3 层
- [ ] 检查孤立页面
- [ ] 监控爬虫日志

---

## 8. 预期效果

### 8.1 SEO 效果

| 指标 | 当前 | 预期 (3个月) | 预期 (6个月) |
|------|------|--------------|--------------|
| 索引页面数 | ~1 | 20+ | 50+ |
| 页面权重分布 | 集中首页 | 均匀分布 | 均匀分布 |
| 爬虫抓取效率 | 低 | 中 | 高 |
| 长尾词排名 | 无 | 10+ | 30+ |

### 8.2 用户体验效果

- 用户更容易找到相关产品
- 页面停留时间增加 20-30%
- 跳出率降低 15-20%
- 页面浏览深度增加

---

## 9. 实施路线图

### 第 1 周：基础链接
- [ ] 添加首页产品区域链接
- [ ] 添加首页应用区域链接
- [ ] 添加主导航菜单
- [ ] 添加页脚链接

### 第 2 周：产品页面
- [ ] 创建产品类别页
- [ ] 添加产品详情页链接
- [ ] 添加相关产品推荐
- [ ] 添加面包屑导航

### 第 3 周：内容页面
- [ ] 添加应用方案页链接
- [ ] 添加服务页面链接
- [ ] 添加资源页面链接
- [ ] 添加上下文链接

### 第 4 周：GEO 页面
- [ ] 创建国家页面
- [ ] 添加国家选择器
- [ ] 添加跨国家链接
- [ ] 验证所有链接

---

**策略完成**: 2026-04-08  
**实施周期**: 4 周  
**预期效果**: 索引页面 +50，长尾排名 +30  
**策略工具**: seo-geo-claude-skills internal-linking-optimizer
