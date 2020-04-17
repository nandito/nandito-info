---
author: info_plhg3qe0
comments: true
date: 2015-05-14 21:05:33+00:00
layout: post
link: https://nandito.info/2015/05/14/rails-listagrid-nezet-kapcsolas/
slug: rails-listagrid-nezet-kapcsolas
title: Rails lista/grid nézet kapcsolás
wordpress_id: 209
categories:
- Dev
tags:
- ruby
- Ruby on Rails
---

Hasznos és gyakori az olyan kapcsolók használata a weboldalakon, melyekkel egy lista nézetét lehet állítani. Találtam egy egyszerű és gyors módot arra, hogy miképp lehet ezt egyszerűen kivitelezni Rails-ben.

A példában egy videóadatbázis nézeteit lehet állítani: listanézetben a "hagyományos" generált scaffold elrendezés látható, grid nézetben pedig mondjuk csak a film borítóképe, címe, kategóriája és játékideje látszik, responsive módon.

### Hozzávalók:

* Controller (`app/controllers/videos_controller.rb`)
* Index view (`app/views/videos/index.html.erb`)
* Partial-ok a nézetekhez (`app/views/videos/_grid_view.html.erb` és `app/views/videos/_list_view.html.erb`)


Először készítsük el a partial-okat. Ezek a "_"-al kezdődő fájlok, amiket `<%= render "név" %>` módon illeszthetünk a view-ba.

`app/views/videos/_grid_view.html.erb`

```ruby
<% @videos.each do |video| %>
  <div class="col-md-6 col-lg-4 col-xl-3">
    <div class="row extra-space-between-rows">
      <div class="col-md-4 col-lg-4">
        <%= image_tag("http://placekitten.com/140/140", :size => "135x135", :class => "img-rounded img-responsive") %>
      </div>
      <div class="col-md-8 col-lg-8">
        <h5><%= link_to video.title, video%></h5>
        <i><%= video.subject.name %></i><br>
        <strong>Release date: </strong><i><%= video.release_date.strftime("%Y. %m. %d.") %></i><br>
        <strong>Length: </strong><i><%= video.length.strftime("%H hours %M minutes") %></i><br>

        <%= link_to 'Edit', edit_video_path(video), :class => "btn-xs btn-info" %>
        <%= link_to 'Destroy', video, method: :delete, data: { confirm: 'Are you sure?' }, :class => "btn-xs btn-danger" %>
      </div>
    </div>
  </div>
<% end %>
```

`app/views/videos/_list_view.html.erb`

```ruby
<table>
  <thead>
  <tr>
    <th>Title</th>
    <th>Company</th>
    <th>Release date</th>
    <th>Length</th>
    <th>Description</th>
    <th>Subject</th>
    <th colspan="3"></th>
  </tr>
  </thead>

  <tbody>
  <% @videos.each do |video| %>
    <tr>
      <td><%= video.title %></td>
      <td><%= video.company_id %></td>
      <td><%= video.release_date %></td>
      <td><%= video.length %></td>
      <td><%= video.description %></td>
      <td><%= video.subject_id %></td>
      <td><%= link_to 'Show', video %></td>
      <td><%= link_to 'Edit', edit_video_path(video) %></td>
      <td><%= link_to 'Destroy', video, method: :delete, data: { confirm: 'Are you sure?' } %></td>
    </tr>
  <% end %>
  </tbody>
</table>
```

Következő lépésben a controller-t felkészítjük arra, hogy mi nézetet váltunk néha. Ehhez bevezetünk egy új paramétert. Az "||" után pedig a default értéket adjuk meg (ha esetleg nem lenne paraméter, akkor se dőljön össze a rendszer). (`app/controllers/videos_controller.rb`)

```ruby
def index
  @videos = Video.all
  @partial = params[:view] || "grid_view"
end
```

Végül az `index.html.erb`-ban végzünk pár módosítást. Betesszük a kívánt helyre a renderelést:

```ruby
<div class="row">
  <%= render @partial %>
</div>
```

És a linkeket vagy button-okat, amikkel állítjuk a nézetet.

```ruby
<div class="btn-group" role="group">
  <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
    View
    <span class="caret"></span>
  </button>
  <ul class="dropdown-menu" role="menu">
    <li><%= link_to "Grid", videos_path(view: "grid_view") %></li>
    <li><%= link_to "List", videos_path(view: "list_view") %></li>
  </ul>
</div>
```
