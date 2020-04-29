using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace MvcMovie.Migrations
{
    public partial class aaa : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "MercadoId",
                table: "Producto",
                nullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "Nombre",
                table: "Departamento",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "INTEGER");

            migrationBuilder.CreateTable(
                name: "Propietario",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Nombre = table.Column<string>(nullable: true),
                    Apellido = table.Column<string>(nullable: true),
                    Telefono = table.Column<string>(nullable: true),
                    ApartamentoId = table.Column<int>(nullable: true),
                    Apartamento_ID = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Propietario", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Propietario_Apartamento_ApartamentoId",
                        column: x => x.ApartamentoId,
                        principalTable: "Apartamento",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Mercado",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Fecha_Creacion = table.Column<DateTime>(nullable: false),
                    PropietarioId = table.Column<int>(nullable: true),
                    Estado = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Mercado", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Mercado_Propietario_PropietarioId",
                        column: x => x.PropietarioId,
                        principalTable: "Propietario",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Producto_MercadoId",
                table: "Producto",
                column: "MercadoId");

            migrationBuilder.CreateIndex(
                name: "IX_Mercado_PropietarioId",
                table: "Mercado",
                column: "PropietarioId");

            migrationBuilder.CreateIndex(
                name: "IX_Propietario_ApartamentoId",
                table: "Propietario",
                column: "ApartamentoId");

            migrationBuilder.AddForeignKey(
                name: "FK_Producto_Mercado_MercadoId",
                table: "Producto",
                column: "MercadoId",
                principalTable: "Mercado",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Producto_Mercado_MercadoId",
                table: "Producto");

            migrationBuilder.DropTable(
                name: "Mercado");

            migrationBuilder.DropTable(
                name: "Propietario");

            migrationBuilder.DropIndex(
                name: "IX_Producto_MercadoId",
                table: "Producto");

            migrationBuilder.DropColumn(
                name: "MercadoId",
                table: "Producto");

            migrationBuilder.AlterColumn<int>(
                name: "Nombre",
                table: "Departamento",
                type: "INTEGER",
                nullable: false,
                oldClrType: typeof(string),
                oldNullable: true);
        }
    }
}
