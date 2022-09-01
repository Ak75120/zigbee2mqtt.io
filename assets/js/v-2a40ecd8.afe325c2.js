"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[10318],{50872:(t,e,o)=>{o.r(e),o.d(e,{data:()=>a});const a={key:"v-2a40ecd8",path:"/devices/TI0001.html",title:"Livolo TI0001 control via MQTT",lang:"en-US",frontmatter:{title:"Livolo TI0001 control via MQTT",description:"Integrate your Livolo TI0001 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2019-07-22T20:08:17.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Important",slug:"important",children:[]}]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Switch (left endpoint)",slug:"switch-left-endpoint",children:[]},{level:3,title:"Switch (right endpoint)",slug:"switch-right-endpoint",children:[]},{level:3,title:"Switch (bottom_left endpoint)",slug:"switch-bottom-left-endpoint",children:[]},{level:3,title:"Switch (bottom_right endpoint)",slug:"switch-bottom-right-endpoint",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/TI0001.md",git:{updatedTime:1661964225e3}}},1074:(t,e,o)=>{o.r(e),o.d(e,{default:()=>l});var a=o(66252);const s=(0,a.uE)('<h1 id="livolo-ti0001" tabindex="-1"><a class="header-anchor" href="#livolo-ti0001" aria-hidden="true">#</a> Livolo TI0001</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>TI0001</td></tr><tr><td>Vendor</td><td>Livolo</td></tr><tr><td>Description</td><td>Zigbee switch (1, 2, 3, 4 gang)</td></tr><tr><td>Exposes</td><td>switch (state), linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/TI0001.jpg" alt="Livolo TI0001"></td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="important" tabindex="-1"><a class="header-anchor" href="#important" aria-hidden="true">#</a> Important</h3>',4),n=(0,a.Uk)("These devices can only be used on channel 26. These devices are locked to the manufacturer's network key (ext_pan_id). Your configuration file "),i=(0,a.Uk)("data/configuration.yaml"),c=(0,a.Uk)(" must contain the following:"),d=(0,a.uE)('<div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">advanced</span><span class="token punctuation">:</span>\n  <span class="token key atrule">ext_pan_id</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token number">33</span><span class="token punctuation">,</span><span class="token number">117</span><span class="token punctuation">,</span><span class="token number">141</span><span class="token punctuation">,</span><span class="token number">25</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">75</span><span class="token punctuation">,</span><span class="token number">18</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">]</span>\n  <span class="token key atrule">channel</span><span class="token punctuation">:</span> <span class="token number">26</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>Therefore these devices may not co-existence with other Zigbee devices. Maybe, you need to add a dedicated coordinator and create a new network for Livolo. If you decided to create a new network, you should specify another &#39;pan_id&#39;.</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">advanced</span><span class="token punctuation">:</span>\n  <span class="token key atrule">pan_id</span><span class="token punctuation">:</span> <span class="token number">6756</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="switch-left-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-left-endpoint" aria-hidden="true">#</a> Switch (left endpoint)</h3><p>The current state of this switch is in the published state under the <code>state_left</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_left&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_left&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_left&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_left&quot;: &quot;&quot;}</code>.</p><h3 id="switch-right-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-right-endpoint" aria-hidden="true">#</a> Switch (right endpoint)</h3><p>The current state of this switch is in the published state under the <code>state_right</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_right&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_right&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_right&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_right&quot;: &quot;&quot;}</code>.</p><h3 id="switch-bottom-left-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-bottom-left-endpoint" aria-hidden="true">#</a> Switch (bottom_left endpoint)</h3><p>The current state of this switch is in the published state under the <code>state_bottom_left</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_bottom_left&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_bottom_left&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_bottom_left&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_bottom_left&quot;: &quot;&quot;}</code>.</p><h3 id="switch-bottom-right-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-bottom-right-endpoint" aria-hidden="true">#</a> Switch (bottom_right endpoint)</h3><p>The current state of this switch is in the published state under the <code>state_bottom_right</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_bottom_right&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_bottom_right&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_bottom_right&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_bottom_right&quot;: &quot;&quot;}</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',14),r={},l=(0,o(83744).Z)(r,[["render",function(t,e){const o=(0,a.up)("RouterLink");return(0,a.wg)(),(0,a.iD)(a.HY,null,[s,(0,a._)("p",null,[n,(0,a.Wm)(o,{to:"/guide/configuration/"},{default:(0,a.w5)((()=>[i])),_:1}),c]),d],64)}]])},83744:(t,e)=>{e.Z=(t,e)=>{for(const[o,a]of e)t[o]=a;return t}}}]);