var builder = WebApplication.CreateBuilder(args);

// Add services
builder.Services.AddRazorPages();

var app = builder.Build();

if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Error");
    app.UseHsts();
}

app.UseHttpsRedirection();

app.UseStaticFiles();   // ⭐ YE LINE IMPORTANT HAI

app.UseRouting();

app.UseAuthorization();

app.MapGet("/", context =>
{
    context.Response.Redirect("/Auth/Login");
    return Task.CompletedTask;
});

app.MapRazorPages();

app.Run();