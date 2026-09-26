/**
 * Million-Dollar Demo Cockpit Configuration Hub
 * Central Schema & Data Provider for Light-Speed Customization.
 *
 * Tailored for Python FastAPI + Next.js + pgvector Senior AI Full-Stack Developer.
 */

export interface NavItem {
  id: string;
  label: string;
}

export interface MetricItem {
  id: string;
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'neutral' | 'down';
  subtext: string;
  badge: string;
}

export interface TableRow {
  id: string;
  entityName: string;
  category: string;
  status: 'active' | 'verified' | 'queued' | 'flagged';
  latency: string;
  provider: string;
  updatedAt: string;
  payload: Record<string, unknown>;
}

export interface SiteConfig {
  slug: string;
  name: string;
  badge: string;
  tagline: string;
  description: string;
  archetype: 'stripe' | 'linear' | 'notion' | 'lovable' | 'bloomberg' | 'apple';
  primaryNav: NavItem[];
  metrics: MetricItem[];
  workflow: {
    badge: string;
    title: string;
    description: string;
    inputLabel: string;
    inputPlaceholder: string;
    defaultInput: string;
    buttonLabel: string;
    sampleResponse: Record<string, unknown>;
  };
  table: {
    badge: string;
    title: string;
    description: string;
    columns: { key: string; label: string }[];
    rows: TableRow[];
  };
}

export const siteConfig: SiteConfig = {
  slug: 'agentic-rag-core',
  name: 'AgenticRAG',
  badge: 'v1.0 Production AI Mesh',
  tagline: 'High-Performance Multi-Agent & pgvector RAG Orchestration Engine',
  description: 'Production-hardened AI control plane integrating Python FastAPI backend routing with Next.js frontends, coordinating pgvector semantic search, Model Context Protocol (MCP) tools, and dual-provider failover.',
  archetype: 'linear',
  primaryNav: [
    { id: 'cockpit', label: 'Agentic Cockpit' },
    { id: 'pipeline', label: 'MCP Tool Registry' },
    { id: 'records', label: 'Vector Data Grid' },
  ],
  metrics: [
    {
      id: 'rag_latency',
      title: 'Semantic Query Speed',
      value: '84ms P99 RAG',
      change: 'pgvector Index Active',
      trend: 'up',
      subtext: 'Cosine similarity search over 100k chunks',
      badge: 'FastAPI Core',
    },
    {
      id: 'mcp_mesh',
      title: 'MCP Server Network',
      value: '4 Active Nodes',
      change: 'LangGraph Managed',
      trend: 'up',
      subtext: 'Auto-scouting database & third-party tool API schemas',
      badge: 'MCP SDK v1.0',
    },
    {
      id: 'guardrails',
      title: 'Grounding Verification',
      value: '100% Guarded',
      change: '0 Hallucinations',
      trend: 'neutral',
      subtext: 'Pre-inference prompt injection & PII filtering active',
      badge: 'NIST AI RMF Posture',
    },
  ],
  workflow: {
    badge: 'Step 1: Test Live Multi-Agent Tool & MCP Query Router',
    title: 'Simulate Complex Multi-Agent Tasks and Tool Discovery',
    description: 'Provide an ambitious natural language goal. Real AI agents will analyze intent, map available Model Context Protocol (MCP) servers, perform pgvector semantic search, and return grounded, secure outputs.',
    inputLabel: 'Operator Agent Prompt',
    inputPlaceholder: 'Enter custom instruction or multi-step agent request...',
    defaultInput: 'Fetch latest active customer subscriptions from PostgreSQL database via MCP, retrieve product documentation from our vector database regarding Pro-tier API limits, and compile an executive summary.',
    buttonLabel: 'Dispatch Agentic Loop',
    sampleResponse: {
      status: 'COMPLETED_WITH_GROUNDING_VERIFIED',
      agentic_routing_trace: [
        '1. Intent Parsing: Classified query as database-lookup + product-limit-validation.',
        '2. MCP Execution: Called PostgreSQL MCP Server node [pg_select] to fetch active counts.',
        '3. pgvector Retrieval: Queried product-docs-collection (similarity score: 0.94).',
        '4. Guardrail Screening: Verified 0 prompt injection vectors and tokenized medical PII.',
        '5. Context Grounding: Reconciled local metrics with retrieved doc limits (50k operations/hr).',
      ],
      database_state_fetched: {
        active_subscriptions: 1420,
        mcp_node_status: 'HEALTHY',
        source_mcp_host: 'postgresql://mcp-server:5432/production_database',
      },
      rag_grounding_evidence: {
        source_chunk_id: 'CHK-9021',
        chunk_content: 'Pro-tier limit: Capped at 50,000 API operations per hour with dual-provider automated failover routing.',
        similarity_metrics: 'Cosine Similarity: 0.94',
        hallucination_index: '0.01 (Extremely Grounded)',
      },
      observability_telemetry: {
        ai_engine: 'Anthropic Claude 3.5 Sonnet (via FastAPI gateway)',
        tokens_consumed: 1142,
        network_latency_ms: 118,
        mcp_tools_discovered: ['pg_select', 'vector_search', 'activecampaign_list_fetch'],
      },
    },
  },
  table: {
    badge: 'Real-Time Vector Ingestion Ledger',
    title: 'Vector Chunking & MCP Node Health',
    description: 'Inspection grid detailing ingested documentation slices, token footprint, pgvector similarity performance, and corresponding MCP controller nodes.',
    columns: [
      { key: 'id', label: 'Chunk ID' },
      { key: 'entityName', label: 'Source Document' },
      { key: 'category', label: 'Vector Target' },
      { key: 'status', label: 'Grounding Health' },
      { key: 'latency', label: 'Search Latency' },
      { key: 'action', label: 'Inspection' },
    ],
    rows: [
      {
        id: 'CHK-9021',
        entityName: 'Enterprise Core API Limits',
        category: 'pgvector (PostgreSQL)',
        status: 'verified',
        latency: '12ms',
        provider: 'developer-docs-mcp',
        updatedAt: '3 mins ago',
        payload: {
          chunk_size_tokens: 280,
          semantic_overlap_tokens: 30,
          embedding_model: 'text-embedding-3-small',
          associated_mcp_schema: 'docs_search_tool',
          grounding_confidence: '0.98 (High Integrity)',
        },
      },
      {
        id: 'CHK-9020',
        entityName: 'ActiveCampaign API Webhooks',
        category: 'pgvector (PostgreSQL)',
        status: 'verified',
        latency: '18ms',
        provider: 'activecampaign-mcp',
        updatedAt: '12 mins ago',
        payload: {
          chunk_size_tokens: 310,
          semantic_overlap_tokens: 40,
          embedding_model: 'text-embedding-3-small',
          associated_mcp_schema: 'ac_contacts_post',
          grounding_confidence: '0.94 (Grounded)',
        },
      },
      {
        id: 'CHK-9019',
        entityName: 'Secure Auth & JWT Handlers',
        category: 'Weaviate Cloud',
        status: 'verified',
        latency: '15ms',
        provider: 'auth-vault-mcp',
        updatedAt: '1 hour ago',
        payload: {
          chunk_size_tokens: 250,
          semantic_overlap_tokens: 20,
          embedding_model: 'text-embedding-3-small',
          associated_mcp_schema: 'jwt_sign_payload',
          grounding_confidence: '0.96 (Grounded)',
        },
      },
      {
        id: 'CHK-9018',
        entityName: 'NIST AI Security Guidelines',
        category: 'pgvector (PostgreSQL)',
        status: 'flagged',
        latency: '8ms',
        provider: 'governance-guard-mcp',
        updatedAt: '3 hours ago',
        payload: {
          chunk_size_tokens: 450,
          semantic_overlap_tokens: 50,
          embedding_model: 'text-embedding-3-small',
          associated_mcp_schema: 'scan_prompt_inject',
          grounding_confidence: '0.62 (Low Similarity Alert)',
        },
      },
      {
        id: 'CHK-9017',
        entityName: 'FastAPI Streaming SSE Engine',
        category: 'pgvector (PostgreSQL)',
        status: 'verified',
        latency: '11ms',
        provider: 'developer-docs-mcp',
        updatedAt: '1 day ago',
        payload: {
          chunk_size_tokens: 290,
          semantic_overlap_tokens: 30,
          embedding_model: 'text-embedding-3-small',
          associated_mcp_schema: 'sse_stream_logs',
          grounding_confidence: '0.97 (High Integrity)',
        },
      },
    ],
  },
};
