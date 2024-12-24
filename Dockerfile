FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 80

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["CALC-WEBD/CALC-WEBD.csproj", "CALC-WEBD/"]
RUN dotnet restore "CALC-WEBD/CALC-WEBD.csproj"
COPY . .
WORKDIR "/src/CALC-WEBD"
RUN dotnet build "CALC-WEBD.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "CALC-WEBD.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "CALC-WEBD.dll"]
