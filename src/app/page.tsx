"use client";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <Box /* ...existing code... */ sx={{ minHeight: '100vh' }}>
        {/* ...hero content... */}
      </Box>

      {/* Services Section */}
      {/* ...existing services content... */}

      {/* About Section */}
      {/* ...existing about content... */}

      {/* Projects Section */}
      <Box component="section" id="projects" sx={{ py: 12 /* remove overflow: 'hidden' */ }}>
        {/* ...restored projects content... */}
      </Box>

      {/* Contact Section */}
      {/* ...existing contact content... */}
    </main>
  );
}
