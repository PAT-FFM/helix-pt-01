export default function decorate(block) {
  
  block.innerHTML= `
<section id="stage" class="col-4-4">
  <article class="box-padding">
  <div class="contentHeadline section"><h1 class="title title-section">Talk Archive</h1>
</div>
  <div class="contentRichText section">
  <p>This is our talk archive with a list of all adaptTo() talks since 2011.<br />
</p>
</div>
  <div class="talkarchive section"><div class="interactive_table row box-padding" data-json-url="https://main--helix-pt-01--pat-ffm.hlx.page/talks/talks-01.json">
  <div class="col-5-5 textsearch">
    &#x1F50D; <input type="search" placeholder='e.g. &quot;code base&quot;' class="searchfield"/>
  </div>
  <div class="col-1-5 filter_wrapper">
  </div>
  <div class="col-4-5 table_wrapper">
    <div>
      <table>
        <thead>
        <tr>
          <th>Year</th>
          <th>Talk</th>
          <th>Speaker</th>
        </tr>
        </thead>
      </table>
    </div>
  </div>
</div>
</div>
</article>
</section>
`;
}
